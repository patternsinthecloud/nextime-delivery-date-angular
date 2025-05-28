export class NextimeDeliveryDateElement extends HTMLElement {
  connectedCallback() {
  }

  disconnectedCallback() {
  }
}

if (!customElements.get('nextime-delivery-date')) {
  customElements.define('nextime-delivery-date', NextimeDeliveryDateElement);
}
