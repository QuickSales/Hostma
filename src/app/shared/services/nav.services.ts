/* eslint-disable linebreak-style */
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

// Menu
export interface Menu {
titledescription: any;
menutitle: any;
bgcolor: any;
	headTitle?: string,
	headTitle2?: string,
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeValue?: string;
	badgeClass? :string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
	Menusub?: boolean;
	target?:boolean;
  selected?: boolean;
  items?: any;
}
export interface Dropdown {
  titledescription: any;
  menutitle: any;
  bgcolor: any;
    headTitle?: string,
    headTitle2?: string,
    path?: string;
    title?: string;
    icon?: string;
    menuicon?: string;
    type?: string;
    badgeValue?: string;
    badgeClass? :string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
    Menusub?: boolean;
    target?:boolean;
    selected?: boolean;
    items1? : any;
  }

@Injectable({
	providedIn: 'root'
})

export class NavService implements OnDestroy {

	private unsubscriber: Subject<any> = new Subject();
	public  screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

	// Search Box
	public search = false;

	// Language
	public language = false;

	// Mega Menu
	// public megaMenu: boolean = false;
	// public levelMenu: boolean = false;
	// public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

	// Collapse Sidebar
	public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
// eslint-disable-next-line linebreak-style

	// For Horizontal Layout Mobile
	public horizontal: boolean = window.innerWidth < 991 ? false : true;

	// Full screen
	public fullScreen = false;
  items1: any;
  sanitizer: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
      });
    }
  }

	ngOnDestroy() {
		this.unsubscriber.next;
		this.unsubscriber.complete();
	}

	private setScreenWidth(width: number): void {
		this.screenWidth.next(width);
	}

	MENUITEMS: any = [
    {
      title: "Home",
      type: "sub",
      active: false,
      selected: false,
      children: [
        {
          path: '/home/home',
          type: "link",
          active: true,
          selected: true,
          icon: "bi-house",
          title: "Home",
        },
        {
          path:'/home/home1',
          type: "link",
          active: false,
          selected: false,
          icon: "bi-sliders",
          title: "Home1 (Slider Option)",
        },
        {
          path: '/home/home2',
          type: "link",
          active: false,
          selected: false,
          icon: "bi-camera-video",
          title: "Home2 (Video Option)",
        },
      ],
    },
    ///////////2459
    {
      title: "Domains",
      type: "mega-slide",
      active: false,
      selected: false,
      Menusub: true,

      children: [
        {
          children: [
            {
              menutitle: "Registration",
              menuicon:"bi-journal-text ",
              path: '/domains/register-a-domain',
              icon: "bi-hdd-stack",
              type: "mega-menu",

              selected: false,
              bgcolor: "secondary",
              bgcolor1: "secondary",
              title: "Register a Domain",
              titledescription: "Book your domain here",
            },
            {
              path: '/domains/new-domain-extensions',
              icon: "bi bi-plus-circle me-0 tx-success",
              type: "link",
              bgcolor: "success",
             bgcolor1: "success",

              selected: false,
              title: "New Domain Extensions",
              titledescription: "pr-erigester to new domain extensions",
            },
            {
              path: '/domains/premium-domains',
              icon: "bi bi-gem me-0 tx-purple",
              type: "link",
              bgcolor: "purple",
              bgcolor1: "purple",

              selected: false,
              title: "Preminum Domains ",
              titledescription: "rigester catched new name",
            },
          ],
        },
        {
          children: [
            {
              menutitle: "Transfer",
              menuicon:" bi-arrow-left-right",
              path: '/domains/transfer-your-domains',
              icon: "bi bi-arrow-right-circle",
              type: "link",
              bgcolor: "pink",
              bgcolor1: "pink",
              active: false,
              selected: false,
              title: "Transfer your Domain",
              titledescription: "rigester catched new domain extensions",
            },
            {
              path: '/domains/bulk-domain-transfer',
              icon: "bi bi-arrows-move me-0 tx-info",
              type: "link",
              bgcolor: "info",
              bgcolor1: "info",
              active: false,
              selected: false,
              title: "Bulk Domain Transfer ",
              titledescription: "rigester catched new domain extensions",
            },
          ],
        },
        {
          children: [
            {
              menutitle: "Ad-ons",
              menuicon: "bi bi-plus-circle-dotted",
              path: '/domains/free-with-every-domain',
              icon: "bi bi-layers me-0 tx-primary",
              type: "link",
              bgcolor: "primary",
              bgcolor1: "primary",
              active: false,
              selected: false,
              title: "Free With Every Domain",
              titledescription: "Free Email, DNS, Theft protection and more",
            },
            {
              path: '/domains/name-suggestion-tool',
              icon: "bi bi-gear ",
              type: "link",
              bgcolor: "danger",
              bgcolor1: "danger",
              active: false,
              selected: false,
              title: "Name Suggestion Tool ",
              titledescription: "rigester catched new domain extensions",
            },
            {
              path: '/domains/whois-lookup',
              icon: "bi bi-search",
              type: "link",
              bgcolor: "teal",
              bgcolor1: "teal",
              active: false,
              selected: false,
              title: "Whois Lookup ",
              titledescription: "rigester catched new domain extensions",
            },
          ],
        },
      ],
    },
    //////end
    {
      title: "Websites",
      type: "mega-slide",
      active: false,
      selected: false,
            Menusub: true,
      children: [
        {
          children: [
            {
              menuicon: "bi-bar-chart",
              menutitle: "Build your websites",
              path:'/website/weebly',
              icon: "bi-wordpress",
              type: "mega-menu",
              active: false,
              selected: false,
              bgcolor: "pink",
              bgcolor1: "pink",
              title: "Weebly",
              title1:"New",
              titledescription: " Build the beautiful website you have always imagined, without having to know code.",

            },
            {
              path: '/website/website-builder',
              icon: "bi-globe",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "success",
              bgcolor1: "success",
              title: "Websitebuilder",
              titledescription: "Create your website instantly, nocoding/design skills required. Choose from over 100 themes or simply drag-and-drop to customize your design.",
              badge: "danger",

            },
          ],
        },
        {
          children: [
            {
              menuicon: "bi-palette",
              menutitle: "Design your websites",
              path: '#',
              icon: "bi-palette2",
              type: "mega-menu",
              active: false,
              selected: false,
              bgcolor: "purple",
              bgcolor1: "purple",
              badge: "danger",
              title: "Themes",
              titledescription: "Enhance the look and feel of your website. Select from a wide range of themes and templates for the web's top CMS platforms.",
              title1:"New",
            },
            {
              icon: "bi-code",
              type: "mega-menu",
              path: '#',
              active: false,
              selected: false,
              bgcolor: "danger",
              bgcolor1: "danger",
              title: "Plugins",
              titledescription: "Download plugins and scripts to add extra functionality to your website.",
            },
            {
              icon: "bi-emoji-smile",
              type: "mega-menu",
              path: '#',
              active: false,
              selected: false,
              bgcolor: "info",
              bgcolor1: "info",
              title: "Logos",
              titledescription: "Choose a customizable template and design a professional looking logo in minutes.",
            },
          ],
        },
      ],
    },
    ///////
    {
      title: "Hosting",
      type: "mega-slide",
      active: false,
      selected: "false",
      children: [
        {
          children: [
            {
              menutitle: "Shared Hosting",
              menuicon: "bi-hdd-rack",
              path: "/hosting/linux-shared-hosting",
              icon: "bi-layers",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "info",
              bgcolor1: "info",
              title: "Linux Shared Hosting",
              titledescription:
                "Perfect for smaller websites and blogs Comes with cPanel PHP Apache and more",
              // badge:'danger',
            },
            {
              path: "/hosting/windows-shared-hosting",
              icon: "bi-windows",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "success",
              bgcolor1: "success",
              title: "Windows Shared Hosting",
              titledescription:
                "Perfect for smaller websites and  blogs. Comes with Plesk, ASP, IIS and more.",
              // badge:'danger',
            },
            {
              path: "/hosting/wordpress-shared-hosting",
              icon: "bi-wordpress",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "purple",
              bgcolor1: "purple",
              title: "Wordpress Shared Hosting",
              titledescription:
                " A secure, reliable and powerful platform crafter for wordpress.",
              // badge:'danger',
            },
          ],
        },
        {
          children: [
            {
              menutitle: "servers",
              menuicon: "bi-hdd-network",
              path: "/hosting/linux-kvm-vps",
              icon: "bi-hdd-stack",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "pink",
              bgcolor1: "pink",
              title: "Linux KVM VPS",
              titledescription:
                "With KVM Hypervisor implementation for a cost effective dedicated server experience.",
              // badge:'danger',
            },
            {
              path: "/hosting/dedicated-servers",
              icon: "bi-hdd-network",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "primary",
              bgcolor1: "primary",
              title: "Dedicated Servers",
              titledescription:
                "Dedicated hardware and rock-solid  performance. Perfect for larger websites and apps.",
              // badge:'danger',
            },
            {
              path:"/hosting/windows-dedicated-servers",
              icon: "bi-windows",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "danger",
              bgcolor1: "danger",
              title: "Windows Dedicated Servers",
              titledescription:
                "Dedicated hardware and rock-solid  performance. Perfect for larger websites and apps.",
              // badge:'danger',
            },
          ],
        },
        {
          children: [
            {
              menutitle: "Reseller hositing",
              menuicon: "bi-hdd-stack",
              path: "/hosting/linux-reseller-hosting",
              icon: "bi-diagram-3",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "warning",
              bgcolor1: "warning",
              title: "Linux Reseller Hosting",
              titledescription:
                "Start your hosting business today.Comes with free WHM, cPanel and WHMCS",
            },
            {
              path: "/hosting/windows-reseller-hosting",
              icon: "bi-windows",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "teal",
              bgcolor1: "teal",
              title: "Windows Reseller Hosting",
              titledescription:
                "Start your hosting business today.Comes with free Plesk and WHMCS.",
              // badge:'danger',
            },
          ],
        },
        {
          children: [
            {
              menutitle: "Tools",
              menuicon: "bi-nut",
              path: "/hosting/codegaurd-websitebackup",
              icon: "bi-shield-lock",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "purple",
              bgcolor1: "purple",
              title: "Codegaurd Website Backup",
              titledescription:
                "Your data is precious. Secure your  website in just a few minues..",
              // badge:'danger',
            },
            {
              path: "/hosting/sitelock-malware-detector",
              icon: "bi-file-earmark-lock",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "secondary",
              bgcolor1: "secondary",
              title: "SiteLock Malware Detector",
              titledescription:
                "Over 5000 websites get attacked   everyday. Get SiteLock and secure your website from hackers, viruses and malware.",
              // badge:'danger',
            },
            {
              path: "/hosting/acronis-cyber-backup",
              icon: "bi-cloud-download",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "info",
              bgcolor1: "info",
              title: "Acronis Cyber Backup",
              title1:"New",
              titledescription:
                " Backup your data on the cloud-recover any time.",
              badge: "danger",
            },
          ],
        },
      ],
    },
    ///////
    {
      title: "Cloud",
      type: "mega-slide",
      active: false,
      selected: false,
      children: [
        {
          children: [
            {
          path: '/cloud/cloud',
          type: "link",
          active: false,
          selected: false,
          icon: "bi-cloud",
          // title: "Home",
          bgcolor: "warning",
          bgcolor1: "warning",
          title: "Cloud",
          titledescription:
            "Power your business with Cloud. 2x faster and 4x scalable.",
        },

        {
          path: '/cloud/professional-cloud',
          type: "link",
          active: false,
          selected: false,
          icon: "bi-cloud-fog2",
          bgcolor: "purple",
          bgcolor1: "purple",
          title: "Professional Cloud",
          titledescription: "Get cloud power and flexibility with the simplicity of fully managed servers.",
        },
      ],
    },
  ]
},
    /////
    {
      title: "Email & Productivity",
      type: "mega-slide",
      active: false,
      selected: false,
      children: [
        {
          children: [
            {
              menutitle: "email",
              menuicon: "bi-envelope",
              path:'/email-productivity/business-email',
              type: "link",
              active: false,
              selected: false,
              icon: "bi-envelope",
              // title: "Professional Cloud",
              bgcolor: "teal",
              bgcolor1: "teal",
              title: "Buisness Email",
              titledescription: "Simple and powerful webmail",
            },
          ],
        },
        {
          children: [
            {
              menutitle: "Email & Productivity",
              menuicon: "bi-envelope-plus",
              path: '/email-productivity/google-workspace',
              type: "link",
              active: false,
              selected: false,
              icon: "bi-google",
              // title: "Professional Cloud",
              bgcolor: "secondary",
              bgcolor1: "secondary",
              title: "Google Workspace",
              titledescription: "cloud based email and productivity suite",
            },
            {
              path: '/email-productivity/enterprise-email',
              type: "link",
              active: false,
              selected: false,
              icon: "bi-inbox",
              // title: "Professional Cloud",
              bgcolor: "purple",
              bgcolor1: "purple",
              title: "Enterprise Email",
              title1:"New",
              titledescription: "Advanced and corporate-class email",
            },
          ],
        },
      ],
    },
    /////
    {
      title: "Security",
      type: "mega-slide",
      active: false,
      selected: false,
      children: [
        {

children:[
  {
              path:'/security/ssl-certificates',
              type: "link",
              active: false,
              selected: false,
              icon: "bi-patch-check",
              // title: "Professional Cloud",
              bgcolor: "secondary",
              bgcolor1: "secondary",
              title: "SSL Certificates",
              titledescription: "Power your business with Cloud. 2x faster and 4x scalable.",

        },
        {

              path: '/security/sitelock',
              type: "link",
              active: false,
              selected: false,
              icon: "bi-person",
              // title: "Professional Cloud",
              bgcolor: "purple",
              bgcolor1: "purple",
              title: "SiteLock",
              titledescription: "Over 500 widgets get attacked everyday. Get SiteLock and secure your website from hackers, viruses and malware.",
            },
            {
              path:`/security/codegaurd-website-backup`,
              type: "link",
              active: false,
              selected: false,
              icon: "bi-code-slash",
              // title: "Professional Cloud",
              bgcolor: "success",
              bgcolor1: "success",
              title: "Codegaurd Website Backup",
              titledescription: "Your data is preciuos. Secure your website in just a few minutes.",
            },
          ],
        },
      ]
    },

//
    {
      title: "Pages",
      type: "sub",
      active: false,
      selected: false,
      children: [
        {
          path: `/pages/aboutus`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi-house",
          title: "Aboutus",
        },
        {
          path: `/pages/blog`,
          type: "link",
          active: false,
          selected: false,
          icon: " bi-box",
          title: "Blog",
        },
        {
          path: `/pages/blog-details`,
          type: "link",
          active: false,
          selected: false,
          icon: " bi-activity",
          title: "Blog Details",
        },
        {
          path: `/pages/contact-us`,
          type: "link",
          active: false,
          selected: false,
          icon: "  bi-telephone",
          title: "Contact Us",
        },
        {
          path: `/pages/faqs`,
          type: "link",
          active: false,
          selected: false,
          icon: "  bi-question",
          title: "FAQ's",
        },
        {
          path: '/switcher-one-route',
          icon: " bi-gear",
          title: 'Switcher',
          type: 'link',

        },

        {
          path: `/pages/forgot-password`,
          type: "link",
          active: false,
          selected: false,
          icon:"bi bi-shield-lock",
          title: "Forgot Password",
        },

        {
          path: `/pages/login-style1`,
          type: "link",
          active: false,
          selected: false,
          icon: " bi-lock",
          title: "loginsyle",
        },
        {
          path: `/custom-pages/login-style2`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi bi-shield-check",
          title: "loginsyle2",
        },
        {
          path: `/pages/registration-style1`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi bi-layers",
          title: "Registerstyle",
        },
        {
          path: `/custom-pages/registration-style2`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi bi-box-seam",
          title: "Registerstyle2",
        },
        {
          path: `/custom-pages/under-maintainance`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi bi-gear-wide-connected",
          title: "Under Maintainance",
        },

      ],
    },

    // {
    //   title: "custom Pages",
    //   type: "sub",
    //   active: false,
    //   selected: false,
    //   children: [

    //   ],
    // },
    {
      menutitle: "WHMCS",

      path: `/whmcs/`,
      type: "link",
      active: false,
      selected: false,
    },

  ];

	// Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
  dropdownItems: any = [
    {
      title: "Web Hosting",
      type: "sub",
      active: false,
      selected: false,
      icon:"cast tx-17",
      children: [
        {
          path: '/hosting/linux-shared-hosting',
          type: "link",
          active: false,
          selected: false,
          icon: "bi-house",
          title: "Linux Shared Hosting",
        },
        {
          path:'/hosting/windows-shared-hosting',
          type: "link",
          active: false,
          selected: false,
          icon: "bi-sliders",
          title: "Windows Shared Hosting",
        },
        {
          path: '/hosting/wordpress-shared-hosting',
          type: "link",
          active: false,
          selected: false,
          icon: "bi-camera-video",
          title: "Wordpress Shared Hosting",
        },
      ],
    },
    ///////////2459
    {
      title: "Domains",
      type: "sub",
      active: false,
      selected: false,
   icon:"globe tx-17",

      children: [
            {
              menutitle: "Registration",
              menutitleicons: "bi-journal-text",
              path: '/domains/register-a-domain',
              icon: "bi-hdd-stack",
              type: "link",
              active: false,
              selected: false,
              bgcolor: "secondary",
              title: "Register a Domain",
              titledescription: "Book your domain here",
            },
            {
              path: '/domains/new-domain-extensions',
              icon: "bi-hdd-stack",
              type: "link",
              bgcolor: "success",
              active: false,
              selected: false,
              title: "New Domain Extensions",
              titledescription: "pr-erigester to new domain extensions",
            },
            {
              path: '/domains/premium-domains',
              icon: "bi-hdd-stack",
              type: "link",
              bgcolor: "purple",
              active: false,
              selected: false,
              title: "Preminum Domains ",
              titledescription: "rigester catched new name",
            },

      ],
    },
    //////end

    ///////

    ///////
    {
      title: "Reseller Hosting",
      type: "sub",
      active: false,
      selected: false,
      icon:"layers tx-17",
      children: [
        {
          path: '/hosting/linux-reseller-hosting',
          type: "link",
          active: false,
          selected: false,

          // title: "Home",
          bgcolor: "warning",
          title: "Linux Reseller Hosting",

        },
        {
          path: "/hosting/windows-reseller-hosting",
          type: "link",
          active: false,
          selected: false,

          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Windows Reseller Hosting",

        },
      ],
    },
    {
      title: "Cloud Hosting",
      type: "sub",
      active: false,
      selected: false,
      icon:"clouds tx-17",
      children: [
        {
          path: '/cloud/cloud',
          type: "link",
          active: false,
          selected: false,

          // title: "Home",
          bgcolor: "warning",
          title: "Cloud Hosting",

        },
        {
          path: "/cloud/professional-cloud",
          type: "link",
          active: false,
          selected: false,

          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Professional Cloud Hosting",

        },
      ],
    },
    {
      title: "Servers",
      type: "sub",
      active: false,
      selected: false,
      icon:"hdd-network tx-17",
      children: [
        {
          path: "/hosting/linux-kvm-vps",
          type: "link",
          active: false,
          selected: false,

          // title: "Home",
          bgcolor: "warning",
          title: "Linux KVM VPS",

        },
        {
          path: "/hosting/dedicated-servers",
          type: "link",
          active: false,
          selected: false,

          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Dedicated Servers",

        },
        {
          path: "/hosting/windows-dedicated-servers",
          type: "link",
          active: false,
          selected: false,

          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Windows Dedicated Servers",

        },
      ],
    },
    {
      title: "Email & Productivity",
      type: "sub",
      active: false,
      selected: false,
      icon:"envelope-plus",
      children: [
        {
          path: '/email-productivity/business-email',
          type: "link",
          active: false,
          selected: false,
          bgcolor: "warning",
          title: "Buisness Email",

        },
        {
          path: '/email-productivity/enterprise-email',
          type: "link",
          active: false,
          selected: false,
          icon:"envelope-plus tx-17",
          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Enterprise Email",

        },
        {
          path:'/email-productivity/google-workspace',
          type: "link",
          active: false,
          selected: false,

          // title: "Professional Cloud",
          bgcolor: "info",
          title: "Google Workspace",

        },
      ],
    },

    /////
    {
      title: "Security",
      type: "sub",
      active: false,
      selected: false,
      icon:"shield-check tx-17",
      children: [
        {
          path: `/security/ssl-certificates`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi-house",
          // title: "Home",
          bgcolor: "warning",
          title: "SSL Certificates",
          titledescription:
            "Power your business with Cloud. 2x faster and 4x scalable.",
        },
        {
          path: `/security/sitelock`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi-house",
          bgcolor: "purple",
          title: "SiteLock",
          titledescription: "Site lock",
        },
        {
          path: `/security/codegaurd-website-backup`,
          type: "link",
          active: false,
          selected: false,
          icon: "bi-house",
          bgcolor: "teal",
          title: "Codegaurd Website Backup",
          titledescription: "codeguradwebsitebackup",
        },
      ],
    },

  ];
  items2 = new BehaviorSubject<Dropdown[]>(this.dropdownItems);

}
