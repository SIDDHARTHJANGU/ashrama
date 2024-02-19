import React from "react";
import { Soulone, Soultwo } from "./Svg";
import Image from "next/image";
import pinita from "../public/image/png/P.P. Pintachariji.png";
import { Col, Row } from "react-bootstrap";

export const GreatSouls = () => {
  return (
    <div className=" pt-2 sec_two_bg ">
      <div className=" container pt-2">
        <div className=" d-flex justify-content-cente flex-column align-items-center  text-center">
          <p className=" d-flex align-items-center fs_28 fw_600 ff_Poppins clr_orange gap-3  mt-5 pt-4  ">
            <span>
              <Soulone />
            </span>
            Trimurti Ashrama
            <span>
              <Soultwo />
            </span>
          </p>
          <h2 className=" fw_700 fs_60 ff_Poppins dark_red max_w">
            Who can give you what you truly want?
          </h2>
          <p className="fw_500 fs_16 ff_Poppins clr_light_black souls_para_w">
            In order to get, you have to receive. Who can give you what you
            truly want? Only someone who totally and lastingly and in the most
            integrated way made the journey on which you also, in your unique
            path, are walking. Thus, the need for a teacher - whether you are
            learning about auto mechanics or software engineering or spiritual
            science - is inescapably profound.
          </p>
          <p className="fw_500 fs_16 ff_Poppins clr_light_black souls_para_w mt-3">
            {" "}
            Thank God, there are Great Souls who have surrendered themselves to
            their deepest purpose: Showing others the Path to Peace and helping
            them stride toward Fullness of Light, Love and Life.
          </p>
          <p className="fw_500 fs_16 ff_Poppins clr_light_black souls_para_w mt-3">
            The spiritual path, in whose honor and energy Trimurti Ashram has
            been founded, is the fullest, fastest and most complete possible -
            wide enough for all who are interested, protected by the entirety of
            Divine Guidance, and empowered for true and lasting spiritual
            progress.
          </p>
        </div>
        <Row>
          <Col lg={4}>
            <Image
              className=" img_radius"
              src={pinita}
              alt="pinita"
              width={364}
              height={442}
            />
          </Col>
          <Col lg={4}>
            <Image
              className=" img_radius"
              src={pinita}
              alt="pinita"
              width={364}
              height={442}
            />
          </Col>
          <Col lg={4}>
            <Image
              className=" img_radius"
              src={pinita}
              alt="pinita"
              width={364}
              height={442}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
