import React from 'react';
import ReactMarkdown from "react-markdown";

const markdown = `
<pre>
    <code>    
        componentDidMount(){
            // set page title
            document.title = "Focus Management and Routing";
            // this query selector searches for the first heading, you may want to be assigning focus elsewhere based on your user's needs
            let target = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
            target.setAttribute('tabindex', "-1");
            target.focus();
        }
</code>
</pre>
`
class FocusRouting extends React.Component {
    componentDidMount(){
        document.title = "Focus Management and Routing";
        let target = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
        target.setAttribute('tabindex', "-1");
        target.focus();
    }


    render(){
        return (
            <div>
                <h1>This Heading Should Recieve Focus When Page First Loads</h1>
                <main id="main">
                    <p>When you navigate to a new page in a React application, focus should land somewhere helpful to users of assistive technology to help orient them. There are many opinions and no hard-and-fast rules about which element should receive focus, <a href="#resources">see resources below</a> for more on this. There is no replacement for testing your application with end-users of assistive technology which will yeild the best choice for your app.</p>

                    <h2>How Focus is Managed in this Demo:</h2>
                    <p>We have leveraged React's <a href="https://reactjs.org/docs/react-component.html#componentdidmount">componentDidMount</a> lifecycle method to assign focus to the first heading of the current "page" (rendered component). Using this lifecycle which waits for the DOM to be mounted, we were also able to assign the title attribute to the page, which does not happen out-of-the-box with <a href="https://www.npmjs.com/package/react-router">React Router</a>, the navigation package used in this application.</p>

                    <p>Another approach for directing focus would be to use React's <a href="https://reactjs.org/docs/refs-and-the-dom.html">ref system</a>, not shown in this demo. <strong>Note:</strong> this link explains the ref system. For an explanation of how one might use refs for focus management check out this <a href="https://dev.to/westbrookc16/managing-focus-in-react-3n13"> DEV article.</a></p>

                    <h2>Assigning a Page Title</h2>
                    <p>React apps are "single page applications". What this means is that there is a sole <code>index.html</code> page which dynamically updates. To create the illusion of true page routing, we have used a package called <a href="https://www.npmjs.com/package/react-router">React Router</a>. This allows us to link to what appears to be new pages with a distinctly navigable <code>url</code>. Under the hood React is just deciding what to render on the screen. As such we run into a common accessibility problem with single page apps: the page <code>title</code> does not update in tandem with these <code>url</code> changes. Screen reader users rely on page titles to understand the context of where they are within a website or app. Again we have leveraged React's <a href="https://reactjs.org/docs/react-component.html#componentdidmount">componentDidMount</a> to dynamically add a page <code>title</code>.</p> 
                    <h3>Sample Code</h3> 
                    <p>Note: this code was partially derrived from a vanilla JavaScript solution offered in this <a href="https://axesslab.com/skip-links/">Axess Lab article</a> combined with the addition of React lifecycle use.</p>  
                    <ReactMarkdown
                        source={markdown}
                        escapeHtml={false}
                     />
                    <h3>Resources:</h3>
                    <ul id="resources">
                        <li>
                            <a href="https://axesslab.com/skip-links/">Your Skip Links Are Broken - Axess Lab</a>
                        </li>
                        <li>
                            <a href="https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing//">What we learned from user testing of accessible client-side routing techniques with Fable Tech Labs - Gatsby JS</a>
                        </li>
                        <li>
                            <a href="https://dev.to/westbrookc16/managing-focus-in-react-3n13">Managing Focus in React (using refs) - DEV</a>
                        </li>
                    </ul>
                </main>
            </div>
        )
    }
}

export default FocusRouting;