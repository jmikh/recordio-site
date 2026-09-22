import { ArticleHeader, AuthorCard, StepList, Figure } from './ArticleMeta';

const ProductWalkthroughArticle = () => (
    <article className="prose max-w-3xl mx-auto px-6 py-10 md:py-14">
        <ArticleHeader
            eyebrow="Guide"
            title="How to Make a Product Walkthrough Video"
            updated="September 22, 2026"
            updatedIso="2026-09-22"
            readTime="9 min read"
        />

        <p>
            A product walkthrough video shows one person doing one job in your product, start to finish, in
            the order they would actually do it. It is not a highlight reel of features and it is not a
            30-second launch trailer. Good ones run two to five minutes, answer a specific question, and get
            watched to the end. Here is how to make one in an afternoon, using whatever recorder you have,
            with notes on where Recordio automates a step.
        </p>

        <h2 id="what">Walkthrough, demo or tutorial?</h2>
        <p>
            People use the words interchangeably, and the differences matter for how you script it.
        </p>
        <ul>
            <li><strong>A demo</strong> is for someone deciding whether to buy. It leads with the outcome and skips the setup.</li>
            <li><strong>A tutorial</strong> is for someone learning a skill. It explains why, not just where to click.</li>
            <li><strong>A walkthrough</strong> is for someone who has decided and now needs to get something done. It follows the real sequence of screens, at the real pace, with nothing skipped.</li>
        </ul>
        <p>
            Walkthroughs are the most useful of the three and the least glamorous. They live in onboarding
            emails, help centre articles, release notes and support replies, and they get watched for months.
        </p>

        <h2 id="before">Before you record</h2>
        <h3>Pick one job</h3>
        <p>
            "Set up your first project" is a walkthrough. "An overview of the dashboard" is not, because there
            is no end state. If you cannot finish the sentence "by the end of this video you will have..." you
            have not picked a job yet. One job per video; make three short videos rather than one long one.
        </p>
        <h3>Write the beats, not a script</h3>
        <p>
            A word-for-word script makes you sound like you are reading. Instead, write one line per screen:
            what you are about to do and why it matters. Five to eight beats is typical. Read it once, then
            record from memory. Here is the skeleton we use:
        </p>
        <pre className="not-prose my-6 rounded-xl border border-border bg-surface-raised p-5 text-sm leading-relaxed whitespace-pre-wrap text-text-main">{`Title: How to [job] in [product]

1. Hook (5 s): "By the end of this you'll have [end state]."
2. Where to start: which page, which button.
3. Beat 1: [screen] – what you do, the one thing to notice.
4. Beat 2: [screen] – what you do, the one thing to notice.
5. Beat 3: [screen] – the step people get wrong, and why.
6. Result: show the finished thing working.
7. Next step (5 s): "Next, [related job]" and where to find it.`}</pre>
        <h3>Prepare the account</h3>
        <ul>
            <li>Use a demo workspace with realistic but fake data. Real customer names in a walkthrough are a problem you will discover later.</li>
            <li>Set the browser window to a consistent size, around 1440 pixels wide, so zooms and frames look the same across your videos.</li>
            <li>Close other tabs, silence notifications, and log out of anything that could pop up. Recordio's simplified toolbar hides bookmarks and tabs from the recording, but a Slack notification is still a Slack notification.</li>
            <li>Do the job once without recording. Every walkthrough that goes wrong goes wrong on a step the presenter had not done in a month.</li>
        </ul>

        <h2 id="record">Recording it</h2>
        <StepList
            steps={[
                {
                    title: 'Start on the first screen the viewer will see',
                    body: 'Not your admin dashboard. If the job starts from an email link, start from the email. Say the hook in the first five seconds and then start clicking.',
                },
                {
                    title: 'Narrate what you are doing and why, in that order',
                    body: '"I\'m opening Settings because the export option lives here" beats "Now I\'m clicking Settings." Speak a little slower than feels natural; pauses are fine because they will be cut.',
                },
                {
                    title: 'Let the viewer see the click',
                    body: 'Move to the control, pause for half a second, then click. On a raw recording this is what makes the action readable on a phone. In Recordio, auto zoom frames the input, card or menu you use, and auto spotlight lifts it off the page, so the pause can be shorter.',
                },
                {
                    title: 'Keep going when you make a mistake',
                    body: 'Say "let me do that again," repeat the step, and carry on. You will cut the fumble later. Stopping and restarting produces a worse video than a clean edit.',
                },
                {
                    title: 'Show the result',
                    body: 'The end state is the payoff. Show the exported file, the sent invite, the published page. Then say the next job and stop. No summary of what you just did.',
                },
            ]}
        />

        <h2 id="edit">Editing: what to cut and what to add</h2>
        <p>
            Editing is where walkthroughs die, because there is always another hour of it. Limit yourself to
            five things.
        </p>
        <ul>
            <li><strong>Cut the silence.</strong> Page loads, thinking pauses, the fumble in step 4. Recordio's Smart AutoCut does this automatically and keeps the pauses where you were typing or clicking, so an action never gets cut in half.</li>
            <li><strong>Check the zooms.</strong> Every zoom should land on the control being used. In Recordio each zoom is a keyframe on the timeline; drag or delete any that miss.</li>
            <li><strong>Add captions.</strong> A lot of people watch on mute at their desk. On Recordio Pro, AI captions arrive with word-level timing; fix a word in place, or delete a caption line to cut that segment of video.</li>
            <li><strong>Blur what should not be there.</strong> API keys, email addresses, the one real customer that slipped into the demo data.</li>
            <li><strong>Frame it, once.</strong> A device frame and a background make a customer-facing walkthrough look intentional. Pick one style and reuse it so your help centre looks consistent.</li>
        </ul>
        <Figure
            src="/assets/interactive-demo/editor.webp"
            alt="The Recordio editor with zoom keyframes shown on the timeline"
            caption="Zoom keyframes on the timeline. Fix the ones that miss; leave the rest."
        />
        <p>
            Anything beyond those five (music, transitions, animated arrows) adds time and rarely adds
            understanding. Skip it unless the video is going on a landing page.
        </p>

        <h2 id="length">How long should a product walkthrough video be?</h2>
        <div className="overflow-x-auto">
            <table>
                <thead>
                    <tr>
                        <th>Kind of walkthrough</th>
                        <th>Target length</th>
                        <th>Where it lives</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>One setting or feature</td><td>45 to 90 seconds</td><td>Help article, support reply, release notes</td></tr>
                    <tr><td>One job with several steps</td><td>2 to 4 minutes</td><td>Onboarding email, in-app help, docs</td></tr>
                    <tr><td>First-run setup, end to end</td><td>4 to 6 minutes</td><td>Welcome email, onboarding checklist</td></tr>
                    <tr><td>Anything longer</td><td>Split it</td><td>A playlist of short videos in your library</td></tr>
                </tbody>
            </table>
        </div>
        <p>
            Watch time falls off a cliff after about three minutes for anything the viewer did not choose to
            watch. If Recordio's view analytics show people dropping at 40 percent, the fix is usually to cut
            the video in two at that point, not to make it better.
        </p>

        <h2 id="share">Sharing and measuring</h2>
        <p>
            A walkthrough should end up as a link, not a file. Files get emailed once and lost; links get
            reused, embedded and updated. On Recordio Pro, every recording gets a public watch page and a share
            link with view counts and watch time, and it sits in a team library with roles, so support can find
            the video product made last month instead of recording it again. Viewer seats are unlimited; only
            the people who record need a paid seat.
        </p>
        <p>
            Put the link where the question is asked: the help article for that feature, the onboarding email
            for that step, the saved reply in your support tool, the changelog entry. Then check the analytics
            after two weeks. A walkthrough with a hundred views and a 30-second average watch time on a
            four-minute video is telling you the hook or the length is wrong.
        </p>

        <h2 id="mistakes">Five mistakes that make walkthroughs unwatchable</h2>
        <ul>
            <li><strong>Starting with a tour.</strong> "This is the sidebar, this is the header." Start with the job.</li>
            <li><strong>Recording the whole screen at native resolution</strong> with no zoom. Text is unreadable on a phone and the viewer stops.</li>
            <li><strong>Leaving in the fumbles.</strong> Two minutes of "hang on, where is it" is two minutes of people leaving.</li>
            <li><strong>No captions.</strong> You lose everyone watching in an open office.</li>
            <li><strong>Sending a file.</strong> It cannot be updated when the product changes, and you never learn whether anyone watched it.</li>
        </ul>

        <h2 id="checklist">The checklist</h2>
        <ul>
            <li>One job with a clear end state</li>
            <li>Five to eight beats written down</li>
            <li>Demo workspace, notifications off, window sized</li>
            <li>Dry run done</li>
            <li>Recorded from the viewer's first screen, hook in the first five seconds</li>
            <li>Silence cut, zooms checked, captions on, sensitive data blurred</li>
            <li>Under four minutes, or split</li>
            <li>Shared as a link where the question gets asked</li>
            <li>Analytics checked after two weeks</li>
        </ul>
        <p>
            If you want to see the recording side in detail, the <a href="/for/chrome/">Chrome screen recorder</a>{' '}
            page shows how tab recording powers auto zoom, and there are step-by-step guides for recording on{' '}
            <a href="/blog/how-to-record-screen-on-mac-with-audio/">Mac</a>,{' '}
            <a href="/blog/how-to-record-screen-on-ubuntu/">Ubuntu</a> and{' '}
            <a href="/blog/how-to-screen-record-on-chromebook/">Chromebook</a>. For picking a tool, read our{' '}
            <a href="/blog/best-tutorial-recording-software/">guide to tutorial recording software</a>. Teams
            coming from Loom can see what changes on the <a href="/compare/loom/">Recordio vs Loom</a> page.
        </p>

        <AuthorCard />
    </article>
);

export default ProductWalkthroughArticle;
