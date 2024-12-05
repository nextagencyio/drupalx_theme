import PricingTemplate from './pricing.twig';

export default {
  title: 'Editorial/Pricing',
  component: PricingTemplate,
  argTypes: {
    eyebrow: {
      description: 'Text displayed above the main title',
      control: 'text'
    },
    title: {
      description: 'Main heading for the pricing section',
      control: 'text'
    },
    summary: {
      description: 'Summary text below the title',
      control: 'text'
    },
    grid_columns: {
      description: 'Number of columns in the grid (2 or 3)',
      control: 'select',
      options: [2, 3],
      defaultValue: 3
    },
    cards: {
      description: 'Array of pricing cards to display',
      control: 'object',
    }
  }
};

export const Default = {
  args: {
    eyebrow: "Choose Your Plan",
    title: "Compare Our Options",
    summary: "Select the best option for your needs",
    grid_columns: 3,
    cards: [
      {
        eyebrow: "DrupalX CMS",
        title: "Free",
        monthly_label: "",
        features: ["Full access to open source features", "Community support", "Documentation"],
        cta_link: {
          url: "#",
          title: "Get Started",
        },
        includes_label: "Includes",
      },
      {
        eyebrow: "Technical Discovery",
        title: "$5,000",
        monthly_label: "",
        features: ["Comprehensive needs assessment", "Custom solution design", "Implementation roadmap"],
        cta_link: {
          url: "#",
          title: "Book Discovery",
        },
        includes_label: "Includes",
      },
      {
        eyebrow: "Full Project Build",
        title: "Contact",
        monthly_label: "",
        features: ["End-to-end project management", "Custom development", "Ongoing support"],
        cta_link: {
          url: "#",
          title: "Contact Sales",
        },
        includes_label: "Includes",
      }
    ]
  }
};

export const TwoCards = {
  args: {
    eyebrow: "Simple Pricing",
    title: "Compare Plans",
    summary: "Choose the plan that fits your needs",
    grid_columns: 2,
    cards: [
      {
        eyebrow: "Basic Plan",
        title: "$9.99",
        monthly_label: "mo",
        features: ["Up to 5 users", "Basic support", "1GB storage"],
        cta_link: {
          url: "#",
          title: "Choose Basic",
        }
      },
      {
        eyebrow: "Pro Plan",
        title: "$29.99",
        monthly_label: "mo",
        features: ["Unlimited users", "24/7 support", "10GB storage", "Advanced analytics"],
        cta_link: {
          url: "#",
          title: "Choose Pro",
        }
      }
    ]
  }
};
