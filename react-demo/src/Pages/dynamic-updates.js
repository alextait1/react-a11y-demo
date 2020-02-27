import React, { useEffect } from 'react';

// function called when clicking first button (no announcement)
const visualUpdate = ()=>{
    const saveEl = document.getElementById("first-save")
    saveEl.classList.add("save-announcement");
}

// function called when clicking second button, adds screen reader alert
const screenReaderUpdate = () => {
    const saveEl = document.getElementById("second-save")
    saveEl.classList.add("save-announcement");
    saveEl.setAttribute("role", "alert")
}

export const DynamicUpdates = () => {
    useEffect(()=>{
        document.title = "Dynamic Updates and Announcements";
        let target = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
        target.setAttribute('tabindex', "-1");
        target.focus();
    })
    return (
      <div>
        <h1>Dynamic Updates and Announcements</h1>
        <p>One of the benefits of single page applications is that they can dynamically update parts of the page without needing to refresh and re-render the entire page. But this can be alinating for screen reader users because they won't necessarily be notified of these updates to the page. This is especially problematic for things like error messgaes and toast notifications. Users need to be aware of actions they have to take or the success/failure of a previous action, so it is imperative that these and all meaningful updates be announced by screen readers. </p>

        <h2>Saved Notification Demo</h2>
        <p>In this demo the user clicks a button generating a "saved" message, a common user interface pattern.</p>
        <h3>Save Notification <strong>NOT</strong> Announced by a Screen Reader👎</h3>
        <div className="button-toast-container">
            <button onClick={visualUpdate}>Click Me to Save!</button>
            <div  id="first-save" className="hidden">
                <p>Saved!</p>
            </div>
        </div>
        <h3>Save Notification <strong>IS</strong> Announced by a Screen Reader👍</h3>
        <div className="button-toast-container">
            <button onClick={screenReaderUpdate}>Click Me to Save!</button>
            <div id="second-save" className="hidden">
                <p>Saved!</p>
            </div>
        </div>
        <h3>Resources</h3>
        <ul>
            <li>
                <a href="https://www.w3.org/WAI/tutorials/forms/notifications/">Guide to Announcements -W3C</a>
            </li>
            <li>
                <a href="https://webaim.org/techniques/formvalidation/">Usable and Accessible Form Validation and Recovery -Web Aim</a>
            </li>
        </ul>
      </div>
      );
  }