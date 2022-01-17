import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import classes from "./Profile.module.css";

import { Element } from "react-scroll";

import profileImg from "../../assets/profile/profile.jpg";

const Profile = () => {
  return (
    <section className={classes.container}>
      <Element name="profile" />
      <div className={classes.wrap}>
        <img className={classes.photo} src={profileImg} alt="Profilové foto" />
        <div>
          <h3 className={classes.heading}>Ing. Jan Křivánek</h3>
          <ul className={classes.topList}>
            <ul className={classes.secList}>
              <li className={classes.value}>
                <a
                  className={classes.link}
                  href="mailto:jan.krivanek@vaskonzultant.cz"
                >
                  jan.krivanek@vaskonzultant.cz
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  color="#ad7f2b"
                  icon={faEnvelope}
                  size="3x"
                  className={classes.icon}
                />
              </li>
            </ul>
            <ul className={classes.secList}>
              <li className={classes.value}>
                <a className={classes.link} href="tel:+420774515835">
                  +420 775 908 881
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  color="#ad7f2b"
                  icon={faPhone}
                  size="3x"
                  className={classes.icon}
                />
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
