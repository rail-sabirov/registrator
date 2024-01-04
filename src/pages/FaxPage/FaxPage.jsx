import styles from './FaxPage.module.scss';
import './FaxPage.parentStyles.scss';


export default function FaxPage() {
    return (
        <div className={styles['fax-page']}>
            <h2>body</h2>
            <div className="table">
                <table>
                    <caption>
                        <h3>Table header</h3>
                        <div>Some text</div>
                    </caption>
                    <thead>
                        <tr>
                            <td>col1</td>
                            <td>col2</td>
                            <td>col3</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>col1</td>
                            <td>col2</td>
                            <td>col3</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Pagination: 1 2 3</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );

}