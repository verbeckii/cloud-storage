import styles from './frontend-shared-configs.module.scss';

/* eslint-disable-next-line */
export interface FrontendSharedConfigsProps {}

export function FrontendSharedConfigs(props: FrontendSharedConfigsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendSharedConfigs!</h1>
    </div>
  );
}

export default FrontendSharedConfigs;
