# 🌐 Spheroid

A decentralized modern payment protocol with loyalty tokens to seamlessly onboard web2 users to web3.

## ✨ Features

- **Email-Based Web3 Onboarding**: Users and merchants can sign up using just their email address, with automatic smart wallet creation
- **Gas Sponsorship**: We sponsor gas fees for merchants new to web3, reducing barriers to entry
- **Custom Loyalty Tokens**: Merchants can create personalized loyalty tokens by simply uploading an image and providing basic details
- **Reward System**: Automatic loyalty token rewards for customers on every purchase
- **Smart Wallet Integration**: Seamless wallet creation and management for users
- **Fiat Payment Support**: Accept payments via Visa card with automatic crypto conversion
- **Customer Analytics**: Track top customers and manage reward distributions

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/spheroid.git
cd spheroid
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

```env
ANALYZE=false
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_LIGHTHOUSE_API_KEY=your_lighthouse_key
PRIVATE_KEY=your_wallet_private_key
```

4. **Start the development server**

```bash
pnpm run dev
```

Visit `http://localhost:3000` to see your application running.

## 🛠 Technology Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Blockchain**: Ethereum, Smart Contracts
- **Storage**: Lighthouse
- **Authentication**: Email-based with Smart Wallet
- **Payment Processing**: Visa Integration with Crypto Conversion

## 📱 Key Components

### For Users

- Email-based signup with automatic wallet creation
- Simple payment process using familiar methods
- Earn loyalty tokens with every purchase
- View and manage rewards in a user-friendly dashboard

### For Merchants

- Easy onboarding with email signup
- Custom loyalty token creation
- Customer analytics and reward management
- Gas-sponsored transactions for newcomers

## 🔧 Configuration

### Environment Variables

| Variable                       | Description                | Required |
| ------------------------------ | -------------------------- | -------- |
| ANALYZE                        | Bundle analysis flag       | Yes      |
| NEXT_PUBLIC_API_URL            | Backend API endpoint       | Yes      |
| NEXT_PUBLIC_LIGHTHOUSE_API_KEY | Lighthouse storage API key | Yes      |
| PRIVATE_KEY                    | Wallet private key         | Yes      |

## 🤝 Contributing

We welcome contributions!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔐 Security

- Never commit your `.env.local` file
- Keep your private keys secure
- Regularly update dependencies
- Report security issues through our bug bounty program

## 📝 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

Need help? Feel free to:

- Open an issue
- Join our Discord community
- Check our FAQ section
- Contact support at support@spheroid.com

## 🌟 Acknowledgments

- Thanks to all our contributors
- Special thanks to our early adopters and testers
- Built with support from the web3 community

---

Made with ❤️ by the Spheroid Team
