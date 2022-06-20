import styles from './FileExplorer.module.scss';
import { fileStructure } from './FileExplorer.mock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

export const FileExplorer = () => {
  return (
    <div className={styles.container}>
      {fileStructure[0].name}
      <FontAwesomeIcon icon="fa-solid fa-folder"/>
      <FontAwesomeIcon icon={faFolder} />
      <FontAwesomeIcon icon="coffee" />
      <FontAwesomeIcon icon={["fal", "coffee"]} />
    </div>
  );
};