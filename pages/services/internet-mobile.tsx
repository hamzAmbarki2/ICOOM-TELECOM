import React from "react";
import ServicePage from "../../components/ServicePage";

export default function InternetMobile() {
  return (
    <ServicePage
      title="Des forfaits internet mobile conçus pour les entreprises !"
      description="Forfaits 4G et 5G adaptés aux sites temporaires, à la connexion bureautique et au travail nomade. Accédez à vos applications de n’importe où avec une connectivité fiable."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/internet-mobile-scaled.png"
      sections={[
        {
          title: "Cas d’usage",
          items: [
            "Sites temporaires et chantiers",
            "Connexion bureautique sécurisée",
            "Nomadisme et télétravail",
          ],
        },
        {
          title: "Visuels du service",
          imageUrls: [
            "https://www.groupesaph.com/wp-content/uploads/2025/09/SAPHELEC-SFR-02-scaled.png",
            "https://www.groupesaph.com/wp-content/uploads/2025/09/SAPHELEC-SFR-2-scaled.png",
          ],
        },
      ]}
    />
  );
}
