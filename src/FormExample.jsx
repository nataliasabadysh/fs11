
// Instruments
import './theme/index.css';
import { ThemeProvider } from './context/theme';
import { Layout } from './common/Layout';
import { Registration } from './examples/Registration/Registration';

export function FormExample() {
    return <ThemeProvider>
                <Layout>
                    <Registration />
                </Layout>
        </ThemeProvider>
}