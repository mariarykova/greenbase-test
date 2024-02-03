import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../ui/button/button.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebarList = [
    {
      type: 'main',
      items: [
        {
          name: 'Dashboard',
          icon: '/assets/svg/dashboard.svg',
          type: 'main',
          quantity: null,
        },
        {
          name: 'Orders',
          icon: '/assets/svg/orders.svg',
          type: 'main',
          quantity: 16,
        },
        {
          name: 'Products',
          icon: '/assets/svg/products.svg',
          type: 'main',
          quantity: null,
        },
        {
          name: 'Categories',
          icon: '/assets/svg/categories.svg',
          type: 'main',
          quantity: null,
        },
        {
          name: 'Customers',
          icon: '/assets/svg/customers.svg',
          type: 'main',
          quantity: null,
        },
        {
          name: 'Reports',
          icon: '/assets/svg/reports.svg',
          type: 'main',
          quantity: null,
        },
        {
          name: 'Coupons',
          icon: '/assets/svg/coupons.svg',
          type: 'main',
          quantity: null,
        },
        {
          name: 'Inbox',
          icon: '/assets/svg/inbox.svg',
          type: 'main',
          quantity: null,
        },
      ],
    },
    {
      type: 'other',
      title: 'Other Items',
      items: [
        {
          name: 'Knowledge Base',
          icon: '/assets/svg/knowledge.svg',
          type: 'other',
          quantity: null,
        },
        {
          name: 'Product Updates',
          icon: '/assets/svg/updates.svg',
          type: 'other',
          quantity: null,
        },
      ],
    },

    {
      type: 'settings',
      title: 'Settings',
      items: [
        {
          name: 'Personal Settings',
          icon: '/assets/svg/personal.svg',
          type: 'settings',
          quantity: null,
        },
        {
          name: 'Global Settings',
          icon: '/assets/svg/global.svg',
          type: 'settings',
          quantity: null,
        },
      ],
    },
  ];

  selected: string;

  constructor() {
    this.selected = 'Personal Settings';
  }

  selectItem(itemName: string) {
    this.selected = itemName;
  }

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  get buttonText() {
    return this.isSidebarOpen ? 'Close' : 'Open';
  }
}
