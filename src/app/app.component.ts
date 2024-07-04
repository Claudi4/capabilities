import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import 'bs5-lightbox';
import { SafePipe } from 'safe-pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SingleCaseComponent } from './components/single-case/single-case.component';
import { CasesData } from './cases-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    SingleCaseComponent,
    CommonModule,
    SafePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'capabilities-angular';
  casesDataList: CasesData[] = [
    {
      id: 'amazon',
      logo: '../assets/images/logoAmazon.svg',
      heading: 'Pump up the volume',
      content:
        '<p> It takes an experienced team and a tight process to keepup with one of the largest retail brands in the world.</p><p> We’re proud of our partnerships and the scale of work we produce each day. We work across several time zones and leverage our huge network to ensure quality and coverageat every point in the process.</p><p><em>Click on the thumbnails to preview the asset.</em></p>',
      services: [
        'In-Store Signage',
        'Digital',
        'Web Assets',
        'Collateral',
        'OOH',
      ],
      carousel: [
        [
          {
            mediaUrl: '../assets/images/amazon/amazon-go-1.webp',
            alt: 'Amazon Go - FREE for Primer Members',
            lightboxUrl: 'https://player.vimeo.com/video/898376250',
            id: 'primero'
          },
          {
            mediaUrl: '../assets/images/amazon/amazon-go-2.webp',
            alt: 'Amazon Go - Buy one, get one 50% off',
            lightboxUrl: 'https://player.vimeo.com/video/898436052',
            id: 'segundo'
          },
          {
            mediaUrl: '../assets/images/amazon/amazon-go-3.webp',
            alt: 'Amazon Go - Digital Circular - Fresh Brand Beef Flank Steak & Dark Red Cherries',
            lightboxUrl: 'https://player.vimeo.com/video/896363741',
            id: 'tercero'
          },
          {
            mediaUrl: '../assets/images/amazon/amazon-go-4.webp',
            alt: 'Amazon Go - $1 Slushies',
            lightboxUrl: './assets/images/amazon/amazon-go-4.webp',
            id: 'cuarto'
          },
        ],
        [
          {
            mediaUrl: '../assets/images/amazon/amazon-fresh-1.webp',
            alt: 'Amazon Fresh - Summer grilling & chilling',
          },
          {
            mediaUrl: '../assets/images/amazon/amazon-fresh-2.webp',
            alt: 'Amazon Fresh - Star-spangled delicious',
          },
          {
            mediaUrl: '../assets/images/amazon/amazon-fresh-3.webp',
            alt: 'Amazon Fresh - Love more, spend less',
          },
          {
            mediaUrl: '../assets/images/amazon/amazon-fresh-4.webp',
            alt: 'Amazon Fresh - Say it with flowers',
          },
        ],
      ],
    },
    {
      id: 'sunbelt',
      logo: '../assets/images/logoSunbelt.svg',
      heading: 'We Help Power the Sun',
      content:
        '<p> We created seven dynamic multi-channel campaigns—12 landing pages, 370+ display banners, 60+ programmatic videos, 32 social posts and more—in just eight months.</p><ul class="content-list large-text"><li>25% higher viewability of key campaigns</li><li>$2,186 average CPA reduction</li><li>600+ assets delivered from jump in just 8 months</li><li>280 MQLs generated in 1 month</li></ul><p><em>Click on the thumbnails to preview the asset.</em></p>',
      services: [
        'Concept/Design',
        'Email',
        'Display (HTML5 and Static)',
        'Landing Pages/Web Assets',
        'Video',
        'Social',
        'Blog/White Paper content',
        'Digital/Print Brochures',
        'Event Collateral',
      ],
      carousel: [
        [
          {
            mediaUrl: '../assets/images/sunbelt/sunbelt-kaleidoscope-1.jpg',
            alt: 'Sunbelt Rentals - Kaleidoscope',
            lightboxUrl: 'https://player.vimeo.com/video/898652450',
          },
          {
            mediaUrl: '../assets/images/sunbelt/sunbelt-pressure-washer-2.jpg',
            alt: 'Sunbelt Rentals - Pressure Washer',
            lightboxUrl: 'https://player.vimeo.com/video/898652403',
          },
          {
            mediaUrl: '../assets/images/sunbelt/sunbelt-leaf-blower-3.jpg',
            alt: 'Sunbelt Rentals - Leaf Blower',
            lightboxUrl: 'https://player.vimeo.com/video/898652420',
          },
          {
            mediaUrl: '../assets/images/sunbelt/sunbelt-trench-safety-4.jpg',
            alt: 'unbelt Rentals - Trench Safety',
            lightboxUrl: 'https://player.vimeo.com/video/898652491',
          },
        ],
        [
          {
            mediaUrl:
              '../assets/images/sunbelt/sunbelt-safety-support-scaffold-1.jpg',
            alt: 'Sunbelt Rentals - Safety support scaffold',
            lightboxUrl: 'https://player.vimeo.com/video/898652462',
          },
          {
            mediaUrl:
              '../assets/images/sunbelt/sunbelt-build-your-floor-feet-2.jpg',
            alt: 'Sunbelt Rentals - Build your floor fleet',
            lightboxUrl: 'https://player.vimeo.com/video/898652386',
          },
          {
            mediaUrl:
              '../assets/images/sunbelt/sunbelt-time-to-go-full-power-3.jpg',
            alt: 'Sunbelt Rentals - Time to go full power',
            lightboxUrl: 'https://player.vimeo.com/video/898652471',
          },
          {
            mediaUrl:
              '../assets/images/sunbelt/sunbelt-future-your-proof-your-floor-care-4.jpg',
            alt: 'Sunbelt Rentals - Future your proof your floor care',
            lightboxUrl: 'https://player.vimeo.com/video/898652480',
          },
        ],
      ],
    },
    {
      id: 'microsoft',
      logo: '../assets/images/logo-microsoft.svg',
      heading: 'Banner Blindness Busted',
      content:
        '<p><strong>Each month, more than 10,000 creative banners runworldwide</strong> in over 40 markets for our various Microsoft campaigns,which are layered with 50+ social assets running each month for several awareness and direct response efforts.</p><p><em>Click on the thumbnails to preview the asset.</em></p>',
      services: ['Display (HTML5 and Static)', '3D Animation', 'Rich Media Units', 'DCO'],
      carousel: [
        [
          {
            mediaUrl: '../assets/images/microsoft/microsoft-octopus-genz-1.jpg',
            alt: 'Microsoft - Gen Z',
            lightboxUrl: 'https://player.vimeo.com/video/898597500',
          },
          {
            mediaUrl: '../assets/images/microsoft/microsoft-365-shark-2.jpg',
            alt: 'Microsoft - Microsoft 365 make the best of your time',
            lightboxUrl: 'https://player.vimeo.com/video/898646382',
          },
          {
            mediaUrl:
              '../assets/images/microsoft/microsoft-365-tell-amazing-stories.jpg',
            alt: 'Microsoft - Microsoft 365 - Intelligence that has your back',
            lightboxUrl:
              'https://capabilities.purered.co/projects/microsoft/banners/new-year-2024/index.html',
          },
          {
            mediaUrl: '../assets/images/microsoft/microsoft-365-llama-4.jpg',
            alt: 'Microsoft - Microsoft 365 Family is like 6 subscriptions in 1',
            lightboxUrl: 'https://player.vimeo.com/video/898646372',
          },
        ],
        [
          {
            mediaUrl:
              '../assets/images/microsoft/microsoft-365-banner-teams.jpg',
            alt: 'Microsoft Teams',
            lightboxUrl: 'https://player.vimeo.com/video/899874152',
          },
          {
            mediaUrl:
              '../assets/images/microsoft/microsoft-azure-virtual-machine-2.jpg',
            alt: 'Microsoft - Azure Virtual Machine',
            lightboxUrl: 'https://player.vimeo.com/video/910055178',
          },
          {
            mediaUrl:
              '../assets/images/microsoft/microsoft-new-year-2024-3.jpg',
            alt: 'Microsoft - Microsoft 365 - Intelligence that has your back',
            lightboxUrl:
              'https://capabilities.purered.co/projects/microsoft/banners/new-year-2024/index.html',
          },
          {
            mediaUrl:
              '../assets/images/microsoft/microsoft-genz-free-from-your-browser-4.jpg',
            alt: 'Microsoft - Free from your browser',
            lightboxUrl: 'https://player.vimeo.com/video/898646372',
          },
        ],
      ],
    },
    {
      id: 'nj-lottery',
      logo: '../assets/images/nj_lottery/logo-nj-lottery.svg',
      heading: 'Anything Can Happen in Jersey',
      content:
        '<p>PureRed’s marketing efforts helped New Jersey Lottery become the fastest-growing large state lottery in the nation with total sales up $1 billion annually. Scratch-o sales exploded thanks to a dedicated brand asset. Customizable jackpot teasers for Powerball and Mega Millions helped New Jersey Lottery over-index on sales compared to the rest of the country. Our efforts resulted in winning a Gold Telly Award, beating out thousands of entrants.</p> <ul class="content-list large-text"> <li>New Jersey Lottery’s​ Annual revenue is up​ $1 Billion in since partnering​ with PureRed</li> <li>Fastest-growing large​ state lottery in the nation</li></ul><p><em>Click on the thumbnails to preview the asset.</em></p>',
      services: ['Concept/Design', 'Advertising'],
      carousel: [
        [
          {
            mediaUrl: '../assets/images/nj_lottery/nj-lottery-comercial.png',
            alt: 'NJLottery - comercial',
            lightboxUrl: 'https://player.vimeo.com/video/855580073',
          },
          {
            mediaUrl: '../assets/images/nj_lottery/nj-lottery-pick3.png',
            alt: 'NJLottery - Pick 3',
            lightboxUrl: 'https://player.vimeo.com/video/855581394',
          },
          {
            mediaUrl: '../assets/images/nj_lottery/nj-lottery-cash-pop.png',
            alt: 'NJLottery - Cash Pop',
            lightboxUrl: 'https://player.vimeo.com/video/855581422',
          },
          {
            mediaUrl: '../assets/images/nj_lottery/nj-lottery-million.png',
            alt: 'NJLottery - Over $158 Million in Prizes',
            lightboxUrl: 'https://player.vimeo.com/video/855582381',
          },
        ],
        [
          {
            mediaUrl: '../assets/images/nj_lottery/nj-lottery-50x.png',
            alt: 'NJLottery - 50x Cash',
            lightboxUrl: 'https://player.vimeo.com/video/855585011',
          },
          {
            mediaUrl: '../assets/images/nj_lottery/nj-lottery-135-million.png',
            alt: 'NJLottery - 135 million',
            lightboxUrl: 'https://player.vimeo.com/video/855584981',
          },
          {
            mediaUrl: '../assets/images/nj_lottery/nj-lottery-scratch-offs.png',
            alt: 'NJLottery - Scratch offs',
            lightboxUrl: 'https://player.vimeo.com/video/855584966',
          },
          {
            mediaUrl: '../assets/images/nj_lottery/nj-lottery-100x.png',
            alt: 'NJLottery - 100x cash',
            lightboxUrl: 'https://player.vimeo.com/video/855583570',
          },
        ],
      ],
      button: {
        url: 'https://www.purered.co/results/nj-lottery',
        target: '_blank',
        text: 'Visit website',
        alt: 'NJ Lottery URL',
      },
    },
    {
      id: 'ford',
      logo: '../assets/images/logo-ford.svg',
      heading: 'Now Trending!',
      content:
        '<p>PureRed designed the first-ever online Ford Trends Report in 2021. Each year, Ford focuses on global trends to gain insight into consumer behaviors. The ninth annual <i>Looking Further with Ford Trends Report </i>explored how consumerswere adapting to life during a pandemic.</p><ul class="content-list large-text"><li>78% Improved impression of the brand</li><li>#1 Performing Ford microsite</li><li>#1 Interactive content design CADC</li></ul><p><em>Click on the thumbnails to preview the asset.</em></p>',
      services: [
        'Concept/Design',
        'Development',
        'Animation',
        'PowerBi Dashboard',
        'Print Brochures',
      ],
      carousel: [
        [
          {
            mediaUrl: '../assets/images/ford/ford-trends-2024-website-1.jpg',
            alt: 'Ford - Ford Trends 2024 website',
            lightboxUrl:
              'https://corporate.ford.com/microsites/ford-trends-2024/index.html',
          },
          {
            mediaUrl: '../assets/images/ford/ford-trends-2020-brochure-2.jpg',
            alt: 'Ford - Ford Trends 2020 brochure',
            lightboxUrl:
              'https://media.ford.com/content/dam/fordmedia/North%20America/US/2019/12/11/2020-Ford-Trends.pdf',
          },
          {
            mediaUrl: '../assets/images/ford/ford-trends-2019-brochure-3.webp',
            alt: 'Ford - Ford Trends 2019 brochure',
            lightboxUrl:
              'https://media.ford.com/content/dam/fordmedia/North%20America/US/2018/12/11/FordTrends2019.pdf',
          },
          {
            mediaUrl: '../assets/images/ford/ford-trends-2023-website-4.jpg',
            alt: 'Ford - Ford Trends 2023 website',
            lightboxUrl:
              'https://corporate.ford.com/microsites/ford-trends-2023/index.html',
          },
        ],
        [
          {
            mediaUrl: '../assets/images/ford/ford-trends-2022-website-1.jpg',
            alt: 'Ford - Ford Trends 2022 website',
            lightboxUrl:
              'https://corporate.ford.com/microsites/ford-trends-2022/index.html',
          },
          {
            mediaUrl: '../assets/images/ford/ford-trends-2018-brochure-2.jpg',
            alt: 'Ford - Ford Trends 2018 brochure',
            lightboxUrl:
              'https://media.ford.com/content/dam/fordmedia/North%20America/US/2017/12/06/2018-Looking-Further-with-Ford-Trend-Report.pdf',
          },
          {
            mediaUrl: '../assets/images/ford/ford-trends-2017-brochure-3.jpg',
            alt: 'Ford - Ford Trends 2017 brochure',
            lightboxUrl:
              'https://media.ford.com/content/dam/fordmedia/North%20America/US/2016/12/7/2017-Looking%20-Further-with-Ford-Trend-Report.pdf',
          },
          {
            mediaUrl: '../assets/images/ford/ford-trends-2021-website-4.jpg',
            alt: 'Ford - Ford Trends 2021 website',
            lightboxUrl:
              'https://corporate.ford.com/microsites/fordtrends/index.html',
          },
        ],
      ],
      button: {
        url: 'https://corporate.ford.com/microsites/ford-trends-2024/index.html',
        target: '_blank',
        text: 'Visit website',
        alt: 'NJ Lottery URL',
      },
    },
    {
      id: 'xyzal',
      logo: '../assets/images/xyzal/logo-xyzal.svg',
      heading: 'Transformed the Allergy Market With Revolutionary New Campaign',
      content:
        '<p>PureRed created the “Nigel the Owl” character as the star of a wide-reaching campaign designed to differentiate the new OTC brand XYZAL from its well-established competition.</p><ul class="content-list large-text"><li>183% Increase in click through rate YoY</li><li>40% Increase in engagement rate YoY</li><li>#1 trial driver across all channels</li><li>3x time spent on website from social traffic</li></ul><p><em>Click on the thumbnails to preview the asset.</em></p>',
      services: ['Concept/Design', 'Advertising'],
      carousel: [
        [
          {
            mediaUrl:
              '../assets/images/xyzal/xyzal - be wise all, take-Xyzal.png',
            alt: 'Xyzal - Be Wise All, Take Xyzal At Night!',
            lightboxUrl: 'https://player.vimeo.com/video/855798927',
          },
          {
            mediaUrl: '../assets/images/xyzal/xyzal - owl picture.png',
            alt: 'Xyzal - Owl picture',
            lightboxUrl: 'https://player.vimeo.com/video/855798882',
          },
          {
            mediaUrl: '../assets/images/xyzal/xyzal - bed time.png',
            alt: 'Xyzal - Bed time story',
            lightboxUrl: 'https://player.vimeo.com/video/855818963',
          },
          {
            mediaUrl: '../assets/images/xyzal/xyzal - relieves allergies.png',
            alt: 'Xyzal - Relieves Allergies While You Rest',
            lightboxUrl: 'https://player.vimeo.com/video/855812268',
          },
        ],
        [
          {
            mediaUrl: './assets/images/xyzal/xyzal - owl doing yoga.png',
            alt: 'Xyzal - Owl doing yoga',
            lightboxUrl: 'https://player.vimeo.com/video/855807251',
          },
          {
            mediaUrl: '../assets/images/xyzal/xyzal - productive day.png',
            alt: 'Xyzal - Wake refreshed for a more productive day',
            lightboxUrl: 'https://player.vimeo.com/video/855802555',
          },
          {
            mediaUrl: '../assets/images/xyzal/xyzal - 24hrs.png',
            alt: 'Xyzal - 24HR Relief that DOES NOT fade',
            lightboxUrl: 'https://player.vimeo.com/video/855802518',
          },
          {
            mediaUrl: '../assets/images/xyzal/xyzal - owl and dog.png',
            alt: 'Xyzal - Owl walking with dog',
            lightboxUrl: 'https://player.vimeo.com/video/855802497',
          },
        ],
      ],
      button: {
        url: 'https://www.purered.co/results/xyzal',
        target: '_blank',
        text: 'Visit website',
        alt: 'NJ Lottery URL',
      },
    },
    {
      id: 'bevmo-gopuff',
      logo: '../assets/images/logo-bevmo-gopuff.svg',
      heading: 'The Tale of Two Brands',
      content:
        '<p>BevMo! (Beverages and More), the largest West Coast retailer of alcoholic beverages, was recently acquired by Philly-based “magically” fast delivery provider Gopuff, who until now has neveroperated a retail operation. Plus, no one in California had everheard of Gopuff. Our task? Drive awareness, trial and brand harmony.</p><p><em>Click on the thumbnails to preview the asset on Slide 2 &amp; 3.</em></p>',
      services: [
        'Direct Mail',
        'Seasonal/Annual Campaign Development',
        'Social',
        'Photo/Video',
        'Radio',
        'Digital (Web, Display, Email, App)',
        'In-Store Signage',
        'Branding',
        'Events',
      ],
      carousel: [
        [
          {
            mediaUrl: '../assets/images/bevmo/bevmo-bringing-you-mo-1.jpg',
            alt: 'Bevmo - Bringing you MO',
          },
          {
            mediaUrl: '../assets/images/bevmo/bevmo-screen-mockup-2.jpg',
            alt: 'Bevmo - Bringing you MO - POS Screen',
          },
          {
            mediaUrl: '../assets/images/bevmo/bevmo-bringing-you-mo-3.jpg',
            alt: 'Bevmo - Bringing you MO',
          },
          {
            mediaUrl: '../assets/images/bevmo/bevmo-bringing-you-mo-4.jpg',
            alt: 'Bevmo - Bringing you MO - Wine',
          },
        ],
        [
          {
            mediaUrl:
              '../assets/images/bevmo/bevmo-national-watermelon-day-1.jpg',
            alt: 'Bevmo - Its National Watermelon Day',
            lightboxUrl: 'https://player.vimeo.com/video/898418899',
          },
          {
            mediaUrl: '../assets/images/bevmo/bevmo-cupid-cocktail-2.jpg',
            alt: 'Bevmo - Cupids Cocktail',
            lightboxUrl: 'https://player.vimeo.com/video/898381822',
          },
          {
            mediaUrl: '../assets/images/bevmo/bevmo-beachy-keen-cocktail-3.jpg',
            alt: 'Bevmo - The Beachy Keen Cocktail',
            lightboxUrl: 'https://player.vimeo.com/video/898387603',
          },
          {
            mediaUrl: '../assets/images/bevmo/bevmo-4th-of-july-4.jpg',
            alt: 'Bevmo - 4th of July - Reel',
            lightboxUrl: 'https://player.vimeo.com/video/898391560',
          },
        ],
        [
          {
            mediaUrl: '../assets/images/bevmo/bevmo-time-to-taste-1.jpg',
            alt: 'Bevmo - Time to taste - Cinco de Mayo',
            lightboxUrl: 'https://player.vimeo.com/video/898384503',
          },
          {
            mediaUrl: '../assets/images/bevmo/bevmo-drink-me-cocktail-2.jpg',
            alt: 'Bevmo - Drink Me Cocktail',
            lightboxUrl: 'https://player.vimeo.com/video/898435029',
          },
          {
            mediaUrl: '../assets/images/bevmo/bevmo-freeze-pops-3.jpg',
            alt: 'Bevmo - Cool off with new freeze pops!',
            lightboxUrl: 'https://player.vimeo.com/video/898438610',
          },
          {
            mediaUrl: '../assets/images/bevmo/gopuff-weekly-newsletter-4.jpg',
            alt: 'Gopuff - Weekly Newsletter',
          },
        ],
      ],
    },
    {
      id: 'rohto',
      logo: '../assets/images/rohto/logo-rohto.svg',
      heading: 'Inclusive Beauty',
      content:
        '<p>The campaign exceeded expectations with top-performing content. Sales increased YOY as a direct result of the campaign in market. PureRed’s four-week influencer pilot was so successful, it has become a core part of future strategies. </p><ul class="content-list large-text"><li>3.4MM video views (vs. 2.5MM forecast)</li><li>+90% engagement rate (vs. 2% benchmark)</li><li>CTR 6x above industry benchmark</li></ul><p><em>Click on the thumbnails to preview the asset.</em></p>',
      services: ['Concept/Design', 'Advertising'],
      carousel: [
        [
          {
            mediaUrl: '../assets/images/rohto/rohto-cooling-eye-drops.png',
            alt: 'Rohto - Cooling eye drops',
            lightboxUrl: 'https://player.vimeo.com/video/915633979',
          },
          {
            mediaUrl: '../assets/images/rohto/rohto-brighten-eyes.png',
            alt: 'Rohto - Brighten eyes',
            lightboxUrl: 'https://player.vimeo.com/video/915633947',
          },
          {
            mediaUrl: '../assets/images/rohto/rohto-hydrate-eyes.png',
            alt: 'Rohto - Hydrate eyes',
            lightboxUrl: 'https://player.vimeo.com/video/915633917',
          },
          {
            mediaUrl: '../assets/images/rohto/rohto-glow-on-model.png',
            alt: 'Rohto - Glow On product',
            lightboxUrl: 'https://player.vimeo.com/video/915633862',
          },
        ],
        [
          {
            mediaUrl: '../assets/images/rohto/rohto-glow.png',
            alt: 'Rohto - product img ',
            lightboxUrl: 'https://player.vimeo.com/video/915634011',
          },
          {
            mediaUrl: '../assets/images/rohto/rohto-get-a-new-glow.png',
            alt: 'Rohto - Get a new glow',
          },
          {
            mediaUrl: '../assets/images/rohto/rohto-glow-on.png',
            alt: 'Rohto - Glow on',
          },
          {
            mediaUrl: '../assets/images/rohto/rohto-product-model.png',
            alt: 'Rohto - product',
          },
        ],
      ],
    },
    {
      id: 'ecostyle',
      logo: '../assets/images/logo-ecostyle.svg',
      heading: 'Defy Definition',
      content:
        '<p>Eco Style is a global Beauty & Styling brand that is the marketleader in the Hair Styling products category. We’ve successfully transitioned their website to be more intuitive; thereby increasing overall traffic and improving the user experience.</p>',
      button: {
        url: 'https://www.ecostyle.com',
        text: 'EcoStyle URL',
      },
      services: [
        'Concept/Design',
        'Development',
        'Analytics',
        'UX Strategy',
        'Blog Content',
        'SEO',
      ],
      carousel: [],
      videoUrl: {
        url: 'https://player.vimeo.com/video/860281911?badge=0&autopause=0&player_id=0&app_id=58479',
        title: 'EcoStyle Website',
      },
    },
    {
      id: 'unfi',
      logo: '../assets/images/unfi/logo-unfi.png',
      heading: 'Distinctly Unified',
      content:
        '<p>UNFI, the largest publicly traded wholesale distributor of health and specialty food in the United States and Canada, supports over 30,000+ customers/retailers—and PureRed supports them and 26 of the brand and regional divisions.</p>',
      services: [
        'Weekly Ad',
        'Seasonal Campaign Development',
        'Professional Services Sell Sheets',
        'Direct Mail/FSI’s',
        'Savings Guides/Coupon Books',
        'In-Store Signage',
        'Grand Opening Support',
        'Vendor Campaign/Management',
        'Packaging Design',
      ],
      carousel: [
        [
          {
            mediaUrl: '../assets/images/unfi/unfi-food-banner-1.jpg',
            alt: 'UNFI food banner',
          },
          {
            mediaUrl: '../assets/images/unfi/unfi-banner-hotdogs.jpg',
            alt: 'UNFI - UNFI mixed by Heinz',
          },
          {
            mediaUrl: '../assets/images/unfi/unfi-banner-stand-2.jpg',
            alt: 'UNFI Stand picture',
          },
          {
            mediaUrl: '../assets/images/unfi/unfi-banner-cake.jpg',
            alt: 'UNFI banner cake',
          },
        ],
        [
          {
            mediaUrl: '../assets/images/unfi/unfi-banner-burger-outdoor.jpg',
            alt: 'UNFI outdoor banner',
          },
          {
            mediaUrl: '../assets/images/unfi/unfi-tacos.jpg',
            alt: 'UNFI - UNFI tacos picture',
          },
          {
            mediaUrl: '../assets/images/unfi/unfi-winter.jpg',
            alt: 'UNFI banner winter sale',
          },
          {
            mediaUrl: '../assets/images/unfi/unfi-green-stand.jpg',
            alt: 'UNFI Stand picture',
          },
        ],
      ],
    },
  ];
}
