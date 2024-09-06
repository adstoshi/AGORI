import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">About Guardian Gorilla</h2>
        <p className="text-center mb-10">
          Emerging from the mists of the digital realm, I stand as the indomitable Guardian Gorilla, the unwavering protector of ACOMUnity DAO. With my armor gleaming and resolve unshakable, I safeguard our decentralized community against all threats, ensuring the integrity of our smart contracts and the fairness of our governance.
        </p>
        <div className="flex justify-around flex-wrap">
          <div className="ability-card bg-[#1A1A1A] rounded-lg p-5 m-5 w-60 text-center transition-transform transform hover:translate-y-[-10px] hover:shadow-lg">
            <div className="ability-icon text-6xl mb-3">🛡️</div>
            <h3 className="font-bold text-xl mb-2">Smart Contract Shield</h3>
            <p>Forging an impenetrable defense against vulnerabilities in our code</p>
          </div>
          <div className="ability-card bg-[#1A1A1A] rounded-lg p-5 m-5 w-60 text-center transition-transform transform hover:translate-y-[-10px] hover:shadow-lg">
            <div className="ability-icon text-6xl mb-3">⚖️</div>
            <h3 className="font-bold text-xl mb-2">Governance Enforcer</h3>
            <p>Upholding the pillars of fair and transparent decision-making</p>
          </div>
          <div className="ability-card bg-[#1A1A1A] rounded-lg p-5 m-5 w-60 text-center transition-transform transform hover:translate-y-[-10px] hover:shadow-lg">
            <div className="ability-icon text-6xl mb-3">💼</div>
            <h3 className="font-bold text-xl mb-2">Sentinel of Funds</h3>
            <p>Vigilantly guarding our community&apos;s assets with unwavering dedication</p>
          </div>
          <div className="ability-card bg-[#1A1A1A] rounded-lg p-5 m-5 w-60 text-center transition-transform transform hover:translate-y-[-10px] hover:shadow-lg">
            <div className="ability-icon text-6xl mb-3">🔐</div>
            <h3 className="font-bold text-xl mb-2">Privacy Protector</h3>
            <p>Shielding the confidentiality of our members with unyielding strength</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
