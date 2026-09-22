import { ArticleHeader, AuthorCard, StepList, Figure } from './ArticleMeta';

/**
 * Facts checked 2026-09-22 against support.apple.com/102618: Shift-Command-5 and QuickTime record
 * the screen with a chosen microphone and save to the Desktop; "Include System Audio" exists only
 * in macOS 27 or later. Screen Studio pricing checked the same day at screen.studio: $9 per month
 * billed yearly, $20 monthly, macOS only, no free plan.
 */
const HowToMacArticle = () => (
    <article className="prose max-w-3xl mx-auto px-6 py-10 md:py-14">
        <ArticleHeader
            eyebrow="How-to"
            title="How to Record Your Screen on Mac With Audio"
            updated="September 22, 2026"
            updatedIso="2026-09-22"
            readTime="8 min read"
        />

        <p>
            <strong>The short answer:</strong> press <code>Shift-Command-5</code>. A toolbar appears at the bottom
            of the screen. Choose Record Entire Screen or Record Selected Portion, click Options and pick your
            microphone, then click Record. Stop with the stop button in the menu bar or press{' '}
            <code>Command-Control-Esc</code>. The recording lands on your Desktop as a .mov file. QuickTime
            Player does the same thing from File, then New Screen Recording.
        </p>
        <p>
            That gets you your voice. It does not get you the sound your Mac is playing, unless you are on macOS
            27 or later, where Apple added an Include System Audio option to the same menu. On older versions
            you need a virtual audio driver or a recorder that captures audio itself. Both routes are below,
            along with a third option for people making walkthroughs of web apps: Recordio, which records the
            tab in Chrome, captures that tab's audio, and handles the zooming and captions for you.
        </p>

        <h2 id="screenshot-toolbar">Method 1: Shift-Command-5 (built into every Mac)</h2>
        <StepList
            steps={[
                {
                    title: 'Open the Screenshot toolbar',
                    body: 'Press Shift-Command-5 together. The toolbar has five capture buttons and an Options menu.',
                },
                {
                    title: 'Choose what to record',
                    body: 'The fourth button records the entire screen; the fifth records a selected portion. For the portion, drag the handles to frame the window or area you want.',
                },
                {
                    title: 'Pick a microphone in Options',
                    body: 'Click Options. Under Microphone, choose the built-in mic or a headset. The same menu sets a timer, whether mouse clicks are shown, and where the file is saved (Desktop by default). On macOS 27 or later, Include System Audio is here too.',
                },
                {
                    title: 'Record',
                    body: 'Click Record. For a selected portion, the button is inside the frame. A stop button appears in the menu bar while you record.',
                },
                {
                    title: 'Stop and trim',
                    body: 'Click the stop button in the menu bar or press Command-Control-Esc. A thumbnail appears in the corner; click it to trim the start and end before it saves. Otherwise the .mov file appears on your Desktop.',
                },
            ]}
        />
        <p>
            <strong>Method 2, QuickTime Player,</strong> is the same recorder in a window. Open QuickTime, choose
            File, then New Screen Recording (or press Control-Command-N), and you get the same toolbar. The
            advantage is that the recording opens in QuickTime afterwards, so you can trim it (Edit, then Trim)
            or export a smaller 1080p file (File, then Export As) without another app. QuickTime can also record
            an iPhone or iPad screen over a cable if you pick the device under the Options menu.
        </p>

        <h2 id="system-audio">Recording system audio on a Mac</h2>
        <p>
            This is the question most people are really asking. Apple's screen recorder captures microphone
            input only, on every macOS version up to and including macOS 26. That is a deliberate design choice,
            not a bug. You have three ways around it.
        </p>
        <h3>macOS 27 or later: use the built-in option</h3>
        <p>
            Open Shift-Command-5, click Options, and choose Include System Audio. Apple's own screen recording
            support page documents this for macOS 27 Golden Gate and later. If you do not see the option, you are
            on an older release.
        </p>
        <h3>macOS 26 and earlier: a virtual audio driver</h3>
        <p>
            Install BlackHole, a free and open-source virtual audio device. Open Audio MIDI Setup (it is in
            Applications, then Utilities), click the plus button in the bottom left and create a Multi-Output
            Device that includes both your speakers or headphones and BlackHole. Set that as your output in
            System Settings, then Sound. Back in Shift-Command-5, choose BlackHole as the microphone. The
            recording now contains whatever your Mac plays. The downside is that your real mic is no longer
            captured, so for narration plus system audio you need an Aggregate Device, which is fiddly.
        </p>
        <h3>Record the tab instead</h3>
        <p>
            If the sound you want is coming from a web page (a video in your product, a notification chime, a
            call in a browser tab), a Chrome-based recorder is simpler. When Recordio records a tab, Chrome
            hands it that tab's audio along with your microphone, with no drivers involved. This works on every
            macOS version. Full-screen and window capture in Chrome on macOS still do not include system audio,
            so pick the tab when you start recording.
        </p>

        <h2 id="recordio">When you want a polished walkthrough</h2>
        <p>
            A raw .mov from QuickTime is fine for a bug report. If the recording is a product walkthrough, an
            onboarding video or an async update for your team, someone has to zoom in on the small text, cut the
            pauses, add captions and upload it. Recordio does that automatically. It is a Chrome extension (also
            Edge and Brave), so it runs on macOS without a separate app. An account is required; the free plan
            needs no card.
        </p>
        <StepList
            steps={[
                {
                    title: 'Install the extension and sign in',
                    body: (
                        <>
                            Add Recordio from the Chrome Web Store and create a free account. The{' '}
                            <a href="/for/mac/">screen recorder for Mac</a> page covers what to expect on macOS.
                        </>
                    ),
                },
                {
                    title: 'Open the tab, pick your mic',
                    body: 'Go to the tab with the product you want to show. Click the Recordio icon, choose your microphone and choose the tab. Chrome will ask for microphone permission the first time.',
                },
                {
                    title: 'Record',
                    body: 'Click record and use the product. Auto zoom reads the page and frames the input, card or menu you interact with. Auto spotlight lifts that element with a 3D effect. The simplified toolbar hides your bookmarks and your other tabs.',
                },
                {
                    title: 'Review in the editor',
                    body: 'Stop, and the project opens in the web app. Smart AutoCut has removed the silence but kept the pauses where you were typing or clicking. Every zoom is a keyframe you can move or delete. On Pro, AI captions arrive with word-level timing; delete a line of captions to cut that part of the video. Add a MacBook frame and a background if it is going in front of customers.',
                },
                {
                    title: 'Download or share',
                    body: 'Download 1080p on the free plan or 4K on Pro. Pro also gives you a share link with view counts and watch time, plus a team library with unlimited viewer seats.',
                },
            ]}
        />
        {/* ASSET NEEDED: screenshot of the Recordio popup in Chrome on macOS with the mic picker. Using the device-frame shot until then. */}
        <Figure
            src="/assets/interactive-demo/macbook.webp"
            alt="A Recordio recording wrapped in a MacBook device frame"
            caption="Device frames and backgrounds are applied in the editor, not at recording time."
        />
        <p>
            <strong>Where Recordio is not the right tool on a Mac:</strong> it records through the browser. If
            you are demonstrating a native Mac app such as Xcode or Final Cut, you can still capture the window
            or the screen, but the DOM-aware zoom and spotlight only work inside a browser tab. For native apps,
            Screen Studio is a good Mac-only desktop recorder with cursor-based zoom; it costs $9 a month billed
            yearly or $20 monthly and has no free plan. Our{' '}
            <a href="/compare/screen-studio/">Recordio vs Screen Studio</a> page compares the two honestly.
        </p>

        <h2 id="troubleshooting">Troubleshooting</h2>
        <h3>1. The recording has no sound</h3>
        <p>
            In Shift-Command-5, Options defaults to None under Microphone on some Macs. Pick a mic before you
            click Record, every time. Then check System Settings, then Sound, then Input: talk and watch the
            level meter. If it does not move, the wrong device is selected or the input volume is at zero.
        </p>
        <h3>2. AirPods make everything sound worse</h3>
        <p>
            When AirPods or most Bluetooth headsets are used as a microphone, macOS switches them to a
            low-quality call profile, and any system audio you are capturing drops to the same quality. Use the
            Mac's built-in mic or a wired headset for the microphone, and keep the AirPods for listening only.
        </p>
        <h3>3. A third-party recorder shows a black screen or no audio</h3>
        <p>
            macOS requires explicit permission for screen capture. Open System Settings, then Privacy &amp;
            Security, then Screen &amp; System Audio Recording, and turn on the app. Do the same under
            Microphone. Chrome needs both if you record through an extension. Quit and reopen the app after
            changing a permission; macOS does not apply it live.
        </p>

        <h2 id="which">Which method should you use?</h2>
        <div className="overflow-x-auto">
            <table>
                <thead>
                    <tr>
                        <th>Need</th>
                        <th>Use</th>
                        <th>System audio?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Quick clip with narration</td><td>Shift-Command-5</td><td>macOS 27 or later only</td></tr>
                    <tr><td>Quick clip plus trim and export</td><td>QuickTime Player</td><td>macOS 27 or later only</td></tr>
                    <tr><td>Capture what the Mac is playing on older macOS</td><td>BlackHole plus Shift-Command-5</td><td>Yes, with setup</td></tr>
                    <tr><td>Web app walkthrough to share with people</td><td>Recordio (tab recording)</td><td>Tab audio, any macOS</td></tr>
                    <tr><td>Native Mac app demo with cursor zoom</td><td>Screen Studio</td><td>Yes</td></tr>
                </tbody>
            </table>
        </div>
        <p>
            Do a five-second test and play it back before recording anything long. If your team is spread across
            operating systems, the same guides exist for{' '}
            <a href="/blog/how-to-record-screen-on-ubuntu/">Ubuntu</a> and{' '}
            <a href="/blog/how-to-screen-record-on-chromebook/">Chromebook</a>, and our{' '}
            <a href="/blog/best-screen-recorders-2026/">best screen recorders in 2026</a> post ranks the paid
            tools.
        </p>

        <AuthorCard />
    </article>
);

export default HowToMacArticle;
