import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [FormsModule, CommonModule, MatSlideToggleModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent {
  notificationsList = [
    {
      title: 'Personalized Offers',
      subtitle: 'Receive offers made special for you',
      isSwitched: true,
    },
    {
      title: 'Online Webinars',
      subtitle: 'Get notified about upcoming webinars',
      isSwitched: true,
    },
    {
      title: 'New Features',
      subtitle: 'Updates about new features and product releases',
      isSwitched: true,
    },
    {
      title: 'Security and Billing',
      subtitle: 'Account security and notifications about billing',
      isSwitched: false,
    },
    {
      title: 'Marketing',
      subtitle: 'Receive marketing newsletters about our new products.',
      isSwitched: false,
    },
  ];
}
