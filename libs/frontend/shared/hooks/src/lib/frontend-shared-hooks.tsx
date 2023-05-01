import styles from './frontend-shared-hooks.module.scss';

/* eslint-disable-next-line */
export interface FrontendSharedHooksProps {}

export function FrontendSharedHooks(props: FrontendSharedHooksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendSharedHooks!</h1>
    </div>
  );
}

export default FrontendSharedHooks;
