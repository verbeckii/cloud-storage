import styles from './frontend-shared-functions.module.scss';

/* eslint-disable-next-line */
export interface FrontendSharedFunctionsProps {}

export function FrontendSharedFunctions(props: FrontendSharedFunctionsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendSharedFunctions!</h1>
    </div>
  );
}

export default FrontendSharedFunctions;
