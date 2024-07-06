import teslaLogo from "../../assets/shared/desktop/tesla-white.svg";
import microsoftLogo from "../../assets/shared/desktop/microsoft-white.svg";
import hpLogo from "../../assets/shared/desktop/hewlett-packard-white.svg";
import oracleLogo from "../../assets/shared/desktop/oracle-white.svg";
import googleLogo from "../../assets/shared/desktop/google-white.svg";
import nvidiaLogo from "../../assets/shared/desktop/nvidia-white.svg";

import teslaLogoBlue from "../../assets/shared/desktop/tesla.svg";
import microsoftLogoBlue from "../../assets/shared/desktop/microsoft.svg";
import hpLogoBlue from "../../assets/shared/desktop/hewlett-packard.svg";
import oracleLogoBlue from "../../assets/shared/desktop/oracle.svg";
import googleLogoBlue from "../../assets/shared/desktop/google.svg";
import nvidiaLogoBlue from "../../assets/shared/desktop/nvidia.svg";

import Image from "next/image";
import styles from "./partners.module.scss";

type PartnersProps = {
  blue?: boolean;
};

export default function Partners({ blue = false }: PartnersProps) {
  return (
    <div className={styles.logos}>
      <Image
        className={styles.logos__tesla}
        src={blue ? teslaLogoBlue : teslaLogo}
        alt="Tesla logo"
      />
      <Image
        className={styles.logos__microsoft}
        src={blue ? microsoftLogoBlue : microsoftLogo}
        alt="Microsoft logo"
      />
      <Image
        className={styles.logos__hp}
        src={blue ? hpLogoBlue : hpLogo}
        alt="HP logo"
      />
      <Image
        className={styles.logos__oracle}
        src={blue ? oracleLogoBlue : oracleLogo}
        alt="Oracle logo"
      />
      <Image
        className={styles.logos__google}
        src={blue ? googleLogoBlue : googleLogo}
        alt="Google logo"
      />
      <Image
        className={styles.logos__nvidia}
        src={blue ? nvidiaLogoBlue : nvidiaLogo}
        alt="Nvidia logo"
      />
    </div>
  );
}
