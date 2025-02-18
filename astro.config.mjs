import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export const locales = {
  root: {
    label: 'English',
    lang: 'en',
  },
  ru: {
    label: 'Русский',
    lang: 'ru',
  },
  de: {
    label: 'Deutsch',
    lang: 'de',
  },
  sk: {
    label: 'Slovensky',
    lang: 'sk',
  },
  cs: {
    label: 'Čeština',
    lang: 'cs',
  },
  id: {
    label: 'Indonesian',
    lang: 'id',
  },
};
const site = 'https://wiki.cachyos.org/';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    react(),
    starlight({
      lastUpdated: true,
      customCss: ['./src/tailwind.css'],
      title: 'CachyOS',
      logo: {
        src: '/src/assets/logo.svg',
      },
      editLink: {
        baseUrl: 'https://github.com/cachyos/wiki/edit/next/',
      },
      social: {
        github: 'https://github.com/cachyos',
        twitter: 'https://twitter.com/cachyos',
        telegram: 'https://t.me/+oR-kWT47vRdmMDli',
        discord: 'https://discord.gg/cachyos-862292009423470592',
        //reddit: 'https://www.reddit.com/r/cachyos',
        //patreon: 'https://www.patreon.com/CachyOS'
      },
      expressiveCode: {
        shiki: {
          langs: ['ini'],
        },
      },
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: site + 'og.jpg?v=1',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content: site + 'og.jpg?v=1',
          },
        },
      ],
      locales,
      sidebar: [
        {
          label: 'Getting Started',
          translations: {
            sk: 'Začíname',
            cs: 'Začínáme',
          },
          items: [
            {
              label: 'Why CachyOS?',
              translations: {
                sk: 'Prečo CachyOS?',
                cs: 'Proč CachyOS?',
              },
              link: 'cachyos_basic/why_cachyos',
            },
            {
              label: 'Downloading CachyOS',
              translations: {
                sk: 'Sťahovanie CachyOS',
                cs: 'Stažení CachyOS',
              },
              link: 'cachyos_basic/download',
            },
          ],
        },
        {
          label: 'Installation',
          translations: {
            sk: 'Inštalácia',
            cs: 'Instalace',
          },
          items: [
            {
              label: 'Requirements & Preinstall Setup',
              translations: {
                sk: 'PPožiadavky CachyOS a inštalačné médium',
                cs: 'Požadavky CachyOS a instalační médium',
              },
              link: 'installation/installation_prepare',
            },
            {
              label: 'Boot Managers',
              translations: {
                sk: 'Boot manažéry',
                cs: 'Boot manažeři',
              },
              link: 'installation/boot_managers',
            },
            {
              label: 'Filesystem',
              translations: {
                sk: 'Súborový systém',
                cs: 'Filesystem',
              },
              link: 'installation/filesystem',
            },
            {
              label: 'Screenshots',
              translations: {
                sk: 'Snímky obrazovky',
                cs: 'Screenshots',
              },
              link: 'installation/screenshots',
            },
            {
              label: 'Desktop Environments',
              translations: {
                sk: 'Desktopové prostredia',
                cs: 'Desktop prostředí',
              },
              link: 'installation/desktop_environments',
            },
            {
              label: 'Installation on Root',
              translations: {
                sk: 'Inštalácia Root',
                cs: 'Instalace na kořenový oddíl',
              },
              link: 'installation/installation_on_root',
            },
            {
              label: 'Installation T2 MacBook',
              translations: {
                sk: 'Inštalácia na T2 MacBook',
                cs: 'Instalace na MacBook T2',
              },
              link: 'installation/installation_t2macbook',
            },
            {
              label: 'Installation Handheld Edition',
              translations: {
                sk: 'Inštalácia Handheld Edition',
                cs: 'Instalace verze pro přenosné zařízení',
              },
              link: 'installation/installation_handheld',
            },
          ],
        },
        {
          label: 'CachyOS Features',
          items: [
            {
              label: 'CachyOS chroot Helper (cachy-chroot)',
              link: 'features/cachy_chroot',
            },
            {
              label: 'CachyOS Hardware Detection (chwd)',
              link: 'features/chwd',
            },
            {
              label: 'CachyOS Kernel',
              link: 'features/kernel',
            },
            {
              label: 'Kernel Manager',
              translations: {
                sk: 'Správca jadra',
                cs: 'Správce jader',
              },
              link: 'features/kernel_manager',
            },
            {
              label: 'CachyOS Settings',
              link: 'features/cachyos_settings',
            },
            {
              label: 'Optimized Repositories',
              link: 'features/optimized_repos',
            },
            {
              label: 'Prebuilt Kernel Modules (NVIDIA/ZFS)',
              link: 'features/modules',
            },
          ],
        },
        {
          label: 'Configuration',
          translations: {
            sk: 'Konfigurácia',
            cs: 'Nastavení',
          },
          items: [
            {
              label: 'Secure Boot Setup',
              link: 'configuration/secure_boot_setup',
            },
            {
              label: 'Post Install Setup',
              translations: {
                sk: 'Nastavenie po inštalácii',
                cs: 'Nastavení po instalaci',
              },
              link: 'configuration/post_install_setup',
            },
            {
              label: 'Boot Manager Configuration',
              link: 'configuration/boot_manager_configuration',
            },
            {
              label: 'Dual GPU Laptops',
              translations: {
                sk: 'Dvojité GPU notebooky',
                cs: 'Notebooky s dvojitou GPU',
              },
              link: 'configuration/dual_gpu',
            },
            {
              label: 'Gaming',
              link: 'configuration/gaming',
            },
            {
              label: 'General System Tweaks',
              translations: {
                sk: 'Všeobecné systémové úpravy',
                cs: 'Obecná úprava systému',
              },
              link: 'configuration/general_system_tweaks',
            },
            {
              label: 'sched-ext Tutorial',
              translations: {
                sk: 'sched-ext návod',
                cs: 'sched-ext Tutoriál',
              },
              link: 'configuration/sched-ext',
            },
            {
              label: 'NVIDIA Wayland Overclocking',
              link: 'configuration/nvidia-wayland-overclock',
            },
            {
              label: 'Automounting Additional Drives',
              link: 'configuration/automount_with_fstab',
            },
          ],
        },
        {
          label: 'Desktop Environments',
          items: [
            {
              label: 'i3',
              link: 'desktop_environments/i3',
            },
            {
              label: 'Hyprland',
              link: 'desktop_environments/hyprland',
            },
            {
              label: 'Qtile',
              link: 'desktop_environments/qtile',
            },
            {
              label: 'KDE Plasma',
              link: 'desktop_environments/kde',
            },
          ],
        },
        {
          label: 'Support',
          translations: {
            sk: 'Podpora',
            cs: 'Podpora',
          },
          items: [
            {
              label: 'FAQ',
              translations: {
                cs: 'Často kladené otázky',
              },
              link: 'support/faq',
            },
            {
              label: 'Submitting Bugs',
              translations: {
                sk: 'Odoslanie chýb',
                cs: 'Nahlášení chyb',
              },
              link: 'support/submitting_bugs',
            },
            {
              label: 'Submitting Package Requests',
              translations: {
                sk: 'Odoslanie požiadaviek na balíčky',
                cs: 'Žádosti o balíčky',
              },
              link: 'support/submitting_package_requests',
            },
            {
              label: 'Social',
              translations: {
                sk: 'Sociálne siete',
                cs: 'Sociální sítě',
              },
              link: 'support/social',
            },
          ],
        },
        {
          label: 'Changelogs',
          translations: {
            sk: 'Zmenové logy',
            cs: 'Změny',
          },
          items: [
            {
              label: 'GUI Installer and ISO',
              translations: {
                sk: 'GUI Inštalátor a ISO',
                cs: 'Grafický instalátor a ISO',
              },
              link: 'changelogs/gui_installer',
            },
            {
              label: 'CLI Installer',
              translations: {
                sk: 'CLI Inštalátor',
                cs: 'Příkazový řádek instalátoru',
              },
              link: 'changelogs/cli_installer',
            },
          ],
        },
        {
          label: 'Policy',
          translations: {
            sk: 'Politika',
            cs: 'Podmínky',
          },
          items: [
            {
              label: 'Community Rules',
              translations: {
                id: 'Peraturan Komunitas',
              },
              link: 'policy/community-rules',
            },
            {
              label: 'Code of Conduct',
              translations: {
                sk: 'Kódex správania',
                cs: 'Kodex chování',
              },
              link: 'policy/code_of_conduct',
            },
            {
              label: 'Terms of Service',
              translations: {
                sk: 'Podmienky služby',
                cs: 'Obchodní podmínky',
              },
              link: 'policy/terms_of_service',
            },
            {
              label: 'Privacy Policy',
              translations: {
                sk: 'Zásady ochrany osobných údajov',
                cs: 'Zásady ochrany osobních údajů',
              },
              link: 'policy/privacy_policy',
            },
            {
              label: 'Repository Policy',
              translations: {
                sk: 'Politika repozitárov',
                cs: 'Repozitářní politika',
              },
              link: 'policy/repository_policy',
            },
            {
              label: 'Donation',
              translations: {
                sk: 'Darcovstvo',
                cs: 'Dobrovolné příspěvky',
              },
              link: 'policy/donation',
            },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
