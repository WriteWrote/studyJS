import { Invoice } from './logger';

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  public render(item: Invoice){
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.textContent = "Invoice";
    li.appendChild(h4);
    const p = document.createElement("p");
    p.textContent = item.getFormattedInfo();
    li.appendChild(p);
  }
}