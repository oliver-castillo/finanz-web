import { Component } from '@angular/core';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  tablerCamera,
  tablerChartBar,
  tablerCirclePlus,
  tablerCreditCard,
  tablerDashboard,
  tablerDatabase,
  tablerDots,
  tablerDotsVertical,
  tablerFileAi,
  tablerFileDescription,
  tablerFileWord,
  tablerFolder,
  tablerFolders,
  tablerHelp,
  tablerInnerShadowTop,
  tablerListDetails,
  tablerLogout,
  tablerNotification,
  tablerReport,
  tablerSearch,
  tablerSettings,
  tablerShare3,
  tablerTrash,
  tablerUserCircle,
  tablerUsers,
} from '@ng-icons/tabler-icons';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-sidebar',
  imports: [
    HlmSidebarImports,
    HlmAvatarImports,
    HlmDropdownMenuImports,
    NgIcon,
    RouterLink,
    TranslocoPipe,
  ],
  templateUrl: './sidebar.html',
  providers: [
    provideIcons({
      tablerInnerShadowTop,
      tablerDashboard,
      tablerListDetails,
      tablerChartBar,
      tablerFolder,
      tablerUsers,
      tablerCamera,
      tablerFileDescription,
      tablerFileAi,
      tablerSettings,
      tablerHelp,
      tablerSearch,
      tablerDatabase,
      tablerReport,
      tablerFileWord,
      tablerDots,
      tablerFolders,
      tablerShare3,
      tablerTrash,
      tablerDotsVertical,
      tablerUserCircle,
      tablerCreditCard,
      tablerNotification,
      tablerLogout,
      tablerCirclePlus,
    }),
  ],
})
export class Sidebar {
  protected readonly _items = {
    user: {
      name: 'spartan',
      email: 'me@spartan.ng',
      avatar: '/assets/avatar.png',
    },
    navMain: [
      {
        title: 'sidebar.navMain.dashboard',
        url: '/dashboard',
        icon: 'tablerDashboard',
      },
      {
        title: 'sidebar.navMain.accounts',
        url: '/accounts',
        icon: 'tablerListDetails',
      },
      {
        title: 'sidebar.navMain.analytics',
        url: '#',
        icon: 'tablerChartBar',
      },
      {
        title: 'sidebar.navMain.projects',
        url: '#',
        icon: 'tablerFolder',
      },
      {
        title: 'sidebar.navMain.team',
        url: '#',
        icon: 'tablerUsers',
      },
    ],
    navClouds: [
      {
        title: 'Capture',
        icon: 'tablerCamera',
        isActive: true,
        url: '#',
        items: [
          {
            title: 'Active Proposals',
            url: '#',
          },
          {
            title: 'Archived',
            url: '#',
          },
        ],
      },
      {
        title: 'Proposal',
        icon: 'tablerFileDescription',
        url: '#',
        items: [
          {
            title: 'Active Proposals',
            url: '#',
          },
          {
            title: 'Archived',
            url: '#',
          },
        ],
      },
      {
        title: 'Prompts',
        icon: 'tablerFileAi',
        url: '#',
        items: [
          {
            title: 'Active Proposals',
            url: '#',
          },
          {
            title: 'Archived',
            url: '#',
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: 'Settings',
        url: '#',
        icon: 'tablerSettings',
      },
      {
        title: 'Get Help',
        url: '#',
        icon: 'tablerHelp',
      },
      {
        title: 'Search',
        url: '#',
        icon: 'tablerSearch',
      },
    ],
    documents: [
      {
        name: 'Data Library',
        url: '#',
        icon: 'tablerDatabase',
      },
      {
        name: 'Reports',
        url: '#',
        icon: 'tablerReport',
      },
      {
        name: 'Word Assistant',
        url: '#',
        icon: 'tablerFileWord',
      },
    ],
  };
}
