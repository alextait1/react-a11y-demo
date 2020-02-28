import React, {useEffect} from 'react';
import ReactAriaModal from '../components/react-aria-modal-demo';
import ReactModalDemo from '../components/react-modal-demo';

export const ModalDemo = () => {

    useEffect(()=>{
        document.title = "Modal Demo";
        let target = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
        target.setAttribute('tabindex', "-1");
        target.focus();
    });
    
        return(
            <div className="modal-demo-page">
                <h1>Modals in React</h1>
                <p>There are a few accessibility issues that modals in React can present:
                    <ol>
                        <li><strong>Focus trap:</strong> when a modal is open, the focus needs to be "trapped" within it, meaning that once focus lands on the last interactive element within it, the next tab stop would jump back to the first interactive element within the modal, rather than to content behind the modal on the main page. Without this screen reader users will easily lose their context.</li>
                        <li><strong>Closing the modal:</strong> the modal should close when a mouse user clicks away from it, when a keyboard user presses the <code>esc</code> key or when a close button is activated with <em>either</em> a mouse or the keyboard.</li>
                        <li><strong>Screen reader announcement:</strong> it is imperative that screen reader users be informed when a modal has opened, changing the context.</li>
                    </ol>
                    On this demo page we show two different npm packages you can use to create an accessible React modal. 
                </p>
                <h2>Using React Modal package from npm</h2>
                <p>Please visit the <a href="https://github.com/reactjs/react-modal">react modal documentation</a> to learn more and see various demos.</p>
                <p>There are many potential configurations for this modal package. This demo has interactive elements within it and a little bit of custom CSS styling.</p>
                <ReactModalDemo id="react-modal-container"/>

                <h2>Using React Aria Live package from npm</h2>
                <p>Please visit the <a href="http://davidtheclark.github.io/react-aria-modal/">react aria live documentation</a> to learn more and see various demos.</p>
                <p>There are many potential configurations for this modal package. This demo has interactive elements within it and a little bit of custom CSS styling.</p>
                <ReactAriaModal id="modal-container"/>

                <h2>Do It Yourself React Modal</h2>
                <p>Depending on the needs of your application, you may choose to build your modal component(s) without the use of a package. For more information on this check out this article <a href="https://levelup.gitconnected.com/how-to-create-an-accessible-react-modal-5b87e6a27503">How to create an accessible React modal.</a> </p>

                <h3>Resources:</h3>
                <ul id="resources">
                    <li>
                        <a href="https://github.com/reactjs/react-modal">React Modal</a>
                    </li>
                    <li>
                        <a href="http://davidtheclark.github.io/react-aria-modal/">React Aria Modal</a>
                    </li>
                    <li>
                        <a href="https://levelup.gitconnected.com/how-to-create-an-accessible-react-modal-5b87e6a27503">How to create an accessible React modal </a>
                    </li>
                </ul>
            </div>
        ) 
}