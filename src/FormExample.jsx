
// Instruments
import './theme/index.css';
import { ThemeProvider } from './context/theme';
import { Layout } from './common/Layout';
import { LoginForm } from './examples/form/example1';
import { LoginFormExample } from './examples/form/example2';

export function AppExample() {

    return <ThemeProvider>
            <Layout>
                <LoginFormExample/>
            </Layout>
        </ThemeProvider>
}



{/* <Layout><Registration /> </Layout> */}