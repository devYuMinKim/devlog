import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '790d9682fa1c4acea4b8c76766857443?pvs=4',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'devYuMinKim blog',
  domain: 'devyuminkim-devlog.vercel.app',
  author: 'devYuMinKim',

  // open graph metadata (optional)
  description: 'devYuMinKim blog - developer blog',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'devYuMinKim',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
  'notion://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9f879028-2417-4d6f-907f-4ba76f6eb0c6%2Fme.png?table=block&id=837f6737-3fb7-46bd-bc7b-1b32204e40f6&spaceId=82d32a12-6f44-4d80-9d18-038bd7506558&width=250&userId=fb8c94da-9811-4094-b52e-6fe8c3d84a1a&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'メイン',
      pageId: '790d9682fa1c4acea4b8c76766857443',
    },
    {
      title: 'カテゴリー',
      pageId: 'd91df49e51034f9e864dbe36cdeda918',
    },
    {
      title: 'Japanese News',
      pageId: '369a09523e3b4b76982a72609d749109',
    },
    {
      title: 'Resume',
      pageId: '64bd48e441a44f4899fb75844280c58c',
    },
  ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'dark',

  // enable comment
  enableComment: true,
});