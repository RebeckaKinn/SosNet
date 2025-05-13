class LazyContent extends HTMLElement {
    static observedAttributes = ['src'];
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {
      const src = this.getAttribute('src');
      if (src) {
        await this.loadContent(src);
      }
    }
  
    async attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'src' && oldValue !== newValue) {
        await this.loadContent(newValue);
      }
    }
  
    async loadContent(src) {
      try {
        const response = await fetch(src);
        if (!response.ok) throw new Error(`Could not load ${src}`);
        const html = await response.text();
  
        // Sett innholdet i en template med <slot>
        this.shadowRoot.innerHTML = html;
      } catch (error) {
        this.shadowRoot.innerHTML = `<p style="color:red">Error: ${error.message}</p>`;
      }
    }
  }
  
  customElements.define('lazy-content', LazyContent);
  