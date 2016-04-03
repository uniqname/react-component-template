import MyComponent from './index.js';
import demoStyle from './assets/demo.css';

function stringifyProps(data) {
    return JSON.stringify(data, (k, v) => {
        if(typeof v === "function") {
            return v.name || v.toString();
        }

        return v;
    }, 4);
}


const demoData = [
    {
        details: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.",
        summary: "Abraham Lincoln",
        open: true,
        groupName: 'quotes',
        clickAction: (e) => console.log('click', e) // eslint-disable-line
    }, {
        details: "Indeed, a major source of objection to a free economy is precisely that it... gives people what they want instead of what a particular group thinks they ought to want. Underlying most arguments against the free market is a lack of belief in freedom itself.",
        groupName: 'quotes',
        summary: "Milton Friedman",
        clickAction: () => console.log('click') // eslint-disable-line
    }, {
        details: "The march of science and technology does not imply growing intellectual complexity in the lives of most people. It often means the opposite.",
        groupName: 'quotes',
        summary: "Thomas Sowell",
        clickAction: () => console.log('click') // eslint-disable-line
    }, {
        details: "Of all tyrannies, a tyranny sincerely exercised for the good of its victims may be the most oppressive. It would be better to live under robber barons than under omnipotent moral busybodies. The robber baron's cruelty may sometimes sleep, his cupidity may at some point be satiated; but those who torment us for our own good will torment us without end for they do so with the approval of their own conscience.",
        groupName: 'quotes',
        summary: "C.S. Lewis",
        clickAction: () => console.log('click') // eslint-disable-line
    }
];



export default (
    <div>
        <div className={demoStyle.container}>
            <MyComponent>
              <p>Nothin&apos; to see here folks.</p>
            </MyComponent>
            <h5>Default (no props provided)</h5>
        </div>

        <hr />

        <div className={demoStyle.container}>
        {demoData.map( (d, i) => (
            <MyComponent {...d} className={demoStyle.component} key={i}>
                { d.details }
            </MyComponent>
        ))}
        </div>
    </div>
);
