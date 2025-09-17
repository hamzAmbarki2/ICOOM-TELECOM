import React from "react";
import ServicePage from "../../components/ServicePage";

export default function LocationDeSmartphone() {
  return (
    <ServicePage
      title="La location de smartphone n’a jamais été aussi simple !"
      description="Accédez à des terminaux de dernière génération à partir de tarifs mensuels attractifs. Simplifiez votre gestion de parc avec des services associés et un accompagnement complet."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/location-de-smartphone-scaled.png"
      sections={[
        {
          title: "Bénéfices clés",
          items: [
            "Budget prévisible et sans surprise",
            "Renouvellement facile des terminaux",
            "Assistance et services associés",
          ],
        },
        {
          title: "Visuels du service",
          imageUrls: [
            "https://www.groupesaph.com/wp-content/uploads/2025/08/telephonie-mobile-scaled.png",
            "https://www.groupesaph.com/wp-content/uploads/2025/08/internet-mobile-scaled.png",
          ],
        },
      ]}
    />
  );
}
