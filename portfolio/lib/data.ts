export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  year: string;
  role: string;
  background: string;
  challenge: string;
  solution: string;
  result: string;
  images: string[];
}

export interface Note {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const projects: Project[] = [
  {
    slug: "credit-manager",
    title: "信用管家",
    category: "金融产品设计",
    description: "面向个人用户的信用管理平台，帮助用户管理多维度信用记录与借贷情况。",
    coverImage: "/images/credit-manager.jpg",
    year: "2024",
    role: "设计总监",
    background: "信用管家是一款帮助用户一站式管理个人信用记录的移动应用。随着消费金融发展，用户拥有多张信用卡、消费贷、经营贷等，信用管理需求日益增长。",
    challenge: "用户面临多头借贷、还款日期分散、利息计算复杂等痛点。如何在保护用户隐私的前提下，提供清晰的信用可视化与便捷的管理功能。",
    solution: "通过AI技术整合用户信用数据，以日历视图和仪表盘形式呈现全局视图。关键信息突出显示，还款提醒智能推送，让用户对自身信用状况了然于胸。",
    result: "产品上线后，用户活跃度提升40%，逾期率降低25%，获得用户一致好评。",
    images: [],
  },
  {
    slug: "loan-manager",
    title: "信贷员管家",
    category: "B端工具设计",
    description: "为信贷从业者打造的客户管理与业绩追踪工具。",
    coverImage: "/images/loan-manager.jpg",
    year: "2023",
    role: "设计总监",
    background: "信贷员管家面向银行、消费金融公司的信贷经理，帮助他们高效管理客户资源、跟进贷款进度、提升业绩。",
    challenge: "信贷员日常工作繁忙，需要在多个系统间切换，客户信息分散。关键节点易遗漏，团队协作效率低。",
    solution: "打造一站式工作台，聚合客户信息、贷款进度、业绩数据。智能预提醒功能确保每个关键节点不错过，团队协作让信息同步更高效。",
    result: "客户使用后，人均产能提升30%，客户流失率降低15%。",
    images: [],
  },
  {
    slug: "baiying-srm",
    title: "百应SRM系统",
    category: "企业级系统",
    description: "供应商关系管理系统，优化采购流程与供应商协同。",
    coverImage: "/images/baiying-srm.jpg",
    year: "2023",
    role: "设计总监",
    background: "百应SRM是面向中大型企业的供应商关系管理平台，覆盖从需求发起、招标、合同签订到付款的全流程。",
    challenge: "企业采购流程复杂，涉及多方角色，传统系统界面陈旧、操作效率低。新人上手成本高，跨部门协作常因信息不对称产生摩擦。",
    solution: "以任务流为驱动重构信息架构，关键节点突出显示。引入可视化报表，让采购数据一目了然。移动端支持随时审批，解决管理层移动办公需求。",
    result: "系统在某头部企业上线后，采购效率提升45%，审批周期缩短60%。",
    images: [],
  },
  {
    slug: "zzbank-mobile",
    title: "郑州银行个人手机银行",
    category: "金融App重设计",
    description: "城商行手机银行体验升级，提升用户留存与转化。",
    coverImage: "/images/zzbank-mobile.jpg",
    year: "2023",
    role: "设计总监",
    background: "郑州银行个人手机银行App上线多年，界面陈旧、功能入口混乱，用户体验评测在同类银行中排名靠后。",
    challenge: "存量用户流失严重，新用户转化率低。核心功能藏得太深，营销活动曝光不足。安全与便捷的矛盾一直存在。",
    solution: "以「简单可信赖」为核心理念重新设计。首页重构突出核心功能，理财与贷款入口前置。生物识别+密码双轨保障安全，操作路径大幅缩短。",
    result: "改版后App Store评分从3.2提升至4.7，月活用户增长55%，理财销售额提升28%。",
    images: [],
  },
  {
    slug: "xy-bank-platform",
    title: "兴业银银平台",
    category: "B2B平台设计",
    description: "银行间同业资金与票据交易平台。",
    coverImage: "/images/xy-bank-platform.jpg",
    year: "2022",
    role: "设计总监",
    background: "银银平台是兴业银行面向中小银行的同业合作平台，提供资金拆借、票据交易、资产撮合等服务。",
    challenge: "平台面向专业用户，信息密度高，操作效率要求极高。金融合规要求严格，任何操作失误都可能带来风险。如何让复杂交易流程可视化、可追溯？",
    solution: "以交易工作流为主线，将大额资金操作拆解为清晰步骤。实时风险提示与合规检查嵌入每个关键节点。数据面板让管理层随时掌握平台运营全局。",
    result: "平台上线后日交易额突破百亿，操作风险事件降为零，用户满意度达96%。",
    images: [],
  },
  {
    slug: "kawangka",
    title: "卡旺卡",
    category: "品牌与用户体验",
    description: "茶饮品牌小程序，打造轻量化点单与会员体系。",
    coverImage: "/images/kawangka.jpg",
    year: "2022",
    role: "设计总监",
    background: "卡旺卡是区域性茶饮品牌，拥有数十家门店。原有点单小程序体验割裂，会员系统薄弱，无法支撑精细化运营。",
    challenge: "如何打造有品牌特色的点单体验？会员积分、等级、权益如何设计才能提升复购？线上线下体验如何统一？",
    solution: "以「温暖可信赖」为品牌调性设计全新小程序。点单流程从5步简化为3步，会员体系以「成长值」为核心驱动复购，结合积分商城提升粘性。",
    result: "小程序上线半年，月订单量增长120%，会员注册率提升至78%。",
    images: [],
  },
];

export const notes: Note[] = [
  {
    slug: "design-leadership",
    title: "从设计师到设计管理者的转变",
    date: "2024-03-15",
    excerpt: "分享我从一线设计到带领团队的设计管理经验，探讨如何平衡专业深度与团队广度。",
    content: `
在从事设计十余年后，我逐渐从执行设计师转向设计管理者。这个转变带给我很多思考...

**专业能力的延伸**

作为设计管理者，我仍然需要保持对设计的敏感度和判断力。不能因为管理工作而远离一线，否则会对团队的专业判断失去准心。

**赋能团队而非替代**

管理者的核心是赋能团队成员，让他们能够独立解决问题，而不是事事亲力亲为。我更注重培养设计师的系统思维和主动沟通能力。

**跨部门协作的艺术**

设计管理者需要更多地与产品、技术、市场等部门协作，理解他们的诉求，找到最优解而非最完美的解。

这套方法论让我的团队在过去两年保持了稳定的高绩效输出。
    `,
  },
  {
    slug: "fintech-design",
    title: "金融类产品设计的思考",
    date: "2024-01-20",
    excerpt: "金融产品设计需要在安全性、易用性与商业目标之间找到平衡。",
    content: `
金融类产品设计有其独特的挑战...

**安全与便捷的矛盾**

金融产品设计中，最大的挑战是在安全与便捷之间找到平衡点。过度安全会导致体验繁琐，用户流失；过度便捷则带来风险隐患。

**信任感的建立**

用户对金融产品的信任感来自多个维度：品牌背书、界面专业度、操作可预期性、信息透明度。我设计产品时会特别注意这些要素的协同作用。

**合规与创新的平衡**

金融行业监管严格，产品设计必须符合合规要求。但在合规框架内，仍有大量创新空间。如何在边界内做出有差异化的体验，是每个金融产品设计师需要思考的问题。
    `,
  },
];

export const siteInfo = {
  name: "冯梦莹",
  title: "体验设计总监",
  bio: "专注于用户体验设计十余年，曾主导多个大型金融、企业级产品的设计升级。善于以设计思维驱动产品创新，带领团队完成从0到1的体验打造。",
  email: "fengmengying@example.com",
  linkedin: "https://linkedin.com/in/fengmengying",
  location: "上海",
  skills: [
    "用户体验设计",
    "设计系统",
    "设计团队管理",
    "交互设计",
    "用户研究",
    "跨部门协作",
  ],
  experience: [
    {
      company: "某科技公司",
      role: "体验设计总监",
      period: "2021 - 至今",
    },
    {
      company: "某互联网公司",
      role: "高级设计主管",
      period: "2018 - 2021",
    },
    {
      company: "某设计咨询公司",
      role: "UI设计师",
      period: "2014 - 2018",
    },
  ],
};