import { HiUserGroup } from 'react-icons/hi'
import { MdAccountBalance, MdOutlineVerifiedUser, MdOutlinePayment } from 'react-icons/md'
import { LiaConnectdevelop } from 'react-icons/lia'
import { GrOptimize } from 'react-icons/gr'

export const cardContent = [
  {
    id: 1,
    title: "Using Nebula",
    description: "Nebula empowers you to centralize, version, and document your designs effortlessly.",
    icon: LiaConnectdevelop,
    iconSize: 50,
    link: "/"
  },
  {
    id: 2,
    title: "Manage your account",
    description: "Customize your account settings, including your email, profile information, and password.",
    icon: MdAccountBalance,
    iconSize: 50,
    link: "/"
  },
  {
    id: 3,
    title: "Optimize your workflow",
    description: "Leverage Abstract to efficiently organize your people and projects.",
    icon: GrOptimize,
    iconSize: 50,
    link: "/"
  },
  {
    id: 4,
    title: "Billing Management",
    description: "Easily update your subscriptions and payment information.",
    icon: MdOutlinePayment,
    iconSize: 50,
    link: "/"
  },
  {
    id: 5,
    title: "Seamless Authentication Setup",
    description: "Configure SSO, SCIM, and Just-in-Time provisioning effortlessly.",
    icon: MdOutlineVerifiedUser,
    iconSize: 50,
    link: "/"
  },
  {
    id: 6,
    title: "Personalized Support",
    description: "Connect with our dedicated team of humans for assistance.",
    icon: HiUserGroup,
    iconSize: 50,
    link: "/"
  }
]