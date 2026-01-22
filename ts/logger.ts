// ! means that you are sure that this element would be queried properly, like in kotlin
const exampleQueryElement = document.querySelector<HTMLElement>('.wrapper h1')!;

console.log(exampleQueryElement.textContent);

// typecasting elements:

const castedElement = document.querySelector(
  '.new-item-form',
) as HTMLFormElement;

console.log(castedElement.children);

interface MyFormatter{
  getFormattedInfo(): string;
}

class Invoice implements MyFormatter{
  private readonly type: string;
  private readonly client: string;
  private readonly details: string;
  private readonly amount: number;

  constructor(type: string, client: string, details: string, amount: number) {
    this.type = type;
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  public getFormattedInfo(): string {
    return `${this.type} to ${this.client}: ${this.amount}. Details: ${this.details}`;
  }
}

class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  public render(item: Invoice){
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.textContent = "Invoice";
    li.appendChild(h4);
    const p = document.createElement("p");
    p.textContent = item.getFormattedInfo();
    li.appendChild(p);
    this.container.appendChild(li);
  }
}

const ul = document.querySelector('ul')!;
const listRenderer = new ListTemplate(ul);

castedElement.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log('event triggered');

  // selecting items by id
  const invoiceType = document.querySelector('#type') as HTMLSelectElement;
  const invoiceToFrom = document.querySelector('#tofrom') as HTMLInputElement;
  const invoiceDetails = document.querySelector('#details') as HTMLInputElement;
  const invoiceAmount = document.querySelector('#amount') as HTMLInputElement;

  console.log(invoiceType.value);

  const invoice = new Invoice(
    invoiceType.value,
    invoiceToFrom.value,
    invoiceDetails.value,
    Number(invoiceAmount.value),
  );

  console.log(invoice.getFormattedInfo());

  listRenderer.render(invoice);
});
