import Link from 'next/link';
import Layout from '../components/Layout';


const About = () => 
<Layout title="About">
<Link href="/">
<a>Go to home</a>
</Link>
<p>A JavaScript programmer</p>
<img src="/static/js.logo.png" alt="Javascript" height="200px"></img>
</Layout>;

export default About;