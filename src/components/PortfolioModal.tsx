import React from "react";
import ModalFrame from "./ModalFrame";
import type { PortfolioItemData } from "../itemLists";

type PortfolioModalProps = PortfolioItemData & {
  modalId: string;
  onClose: () => void;
};

const PortfolioModal = (props: PortfolioModalProps) => {
  const {
    altText,
    date,
    description,
    imageNameWebP,
    modalId,
    onClose,
    projectName,
    repoURL,
    focus,
    webURL,
  } = props;

  const displayURL = webURL !== undefined;
  const GitHubURL = repoURL !== undefined;

  return (
    <ModalFrame modalId={modalId} onClose={onClose} title={projectName}>
      <img
        src={imageNameWebP}
        className="img-responsive img-centered"
        alt={altText}
        width="900"
        height="650"
        loading="lazy"
        decoding="async"
      />
      <p className="project-description">{description}</p>
      <ul className="project-meta item-details">
        <li>
          <span className="meta-label">Date</span>
          <strong>{date}</strong>
        </li>
        <li>
          <span className="meta-label">Focus</span>
          <strong>{focus}</strong>
        </li>
        {GitHubURL && (
          <li className="web-link">
            <span className="meta-label">Github repository</span>
            <strong>
              <a className="meta-link" href={repoURL}>{repoURL}</a>
            </strong>
          </li>
        )}
        {displayURL && (
          <li className="web-link">
            <span className="meta-label">Live at</span>
            <strong>
              <a className="meta-link" href={webURL}>{webURL}</a>
            </strong>
          </li>
        )}
      </ul>
    </ModalFrame>
  );
};

export default PortfolioModal;
