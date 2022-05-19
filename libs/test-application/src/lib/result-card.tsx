import styles from './result-card.module.css';

export interface ResultCardProps {
    answerSheet: number[];
}

export const ResultCard = (props: ResultCardProps) => {
    return (
        <div className={styles['result-card']}>
            <div className={styles['result-card-header']}>
                View your answers
            </div>
            <div className={styles['result-card-entries']}>
                {[...props.answerSheet].map((ans, index) => {
                    if (index > 0) {
                        return (
                            <div>
                                {`${index}. \u2002`}
                                <code>{`${ans ? ans : ''}`}</code>
                            </div>
                        );
                    }
                    return <></>;
                })}
            </div>
        </div>
    );
};

export default ResultCard;
