import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ru', name: 'Russian' },
  ];

  selectedLanguage = 'en';

  timezones = [
    { id: 'UTC-12:00', name: 'UTC-12:00' },
    { id: 'UTC-11:00', name: 'UTC-11:00' },
    { id: 'UTC-10:00', name: 'UTC-10:00, Hawaii' },
    { id: 'UTC-09:00', name: 'UTC-09:00' },
    { id: 'UTC-08:00', name: 'UTC-08:00, Pacific Time (US & Canada)' },
  ];
  selectedTimezone = 'UTC-08:00';
}
