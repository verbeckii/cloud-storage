import styles from './frontend-shared-constants.module.scss';

/* eslint-disable-next-line */
export interface FrontendSharedConstantsProps {}

export function FrontendSharedConstants(props: FrontendSharedConstantsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendSharedConstants!</h1>
    </div>
  );
}

export default FrontendSharedConstants;
