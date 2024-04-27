import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import { VpnDetector } from 'capacitor-vpn-detector';

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `
    <style>
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: block;
        width: 100%;
        height: 100%;
      }
    </style>
    <div>
      <capacitor-welcome-titlebar>
        <h1>Capacitor</h1>
      </capacitor-welcome-titlebar>
      <main>
        <p>
          Capacitor makes it easy to build powerful apps for the app stores, mobile web (Progressive Web Apps), and desktop, all
          with a single code base.
        </p>
        <h2>Getting Started</h2>
        <h3 id="is-vpn-active"></h3>
      </main>
    </div>
    `;
    }

    connectedCallback() {
      const self = this;

      const el = self.shadowRoot.getElementById('is-vpn-active');

      VpnDetector.isVpnActive().then(isVpnActive => {
        el.innerText = `VPN is ${isVpnActive.value ? 'active' : 'not active'}`;
      });

      // addListener('vpnStateChange', isVpnActive => {
      //   el.innerText = `VPN is ${
      //     isVpnActive.value ? 'active' : 'not active'
      //   }, add listener`;
      // });

      App.addListener('appStateChange', () => {
        VpnDetector.isVpnActive().then(isVpnActive => {
          el.innerText = `VPN is ${
            isVpnActive.value ? 'active' : 'not active'
          }`;
        });
      });

      // Network.addListener('networkStatusChange', () => {
      //   VpnDetector.isVpnActive().then(isVpnActive => {
      //     el.innerText = `VPN is ${
      //       isVpnActive.value ? 'active' : 'not active'
      //     } network`;
      //   });
      // });
    }
  },
);

window.customElements.define(
  'capacitor-welcome-titlebar',
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: 15px 15px 15px 15px;
        text-align: center;
        background-color: #73B5F6;
      }
      ::slotted(h1) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.9em;
        font-weight: 600;
        color: #fff;
      }
    </style>
    <slot></slot>
    `;
    }
  },
);
