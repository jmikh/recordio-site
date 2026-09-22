import { ArticleHeader, AuthorCard, StepList, Figure } from './ArticleMeta';

/**
 * Facts checked 2026-09-22: ChromeOS's Screen capture tool opens with Shift+Ctrl+Show windows,
 * offers full screen, partial and window capture, has microphone, device audio, camera and
 * show-clicks options behind the gear, and saves WebM files to Downloads by default.
 */
const HowToChromebookArticle = () => (
    <article className="prose max-w-3xl mx-auto px-6 py-10 md:py-14">
        <ArticleHeader
            eyebrow="How-to"
            title="How to Screen Record on a Chromebook in 2026"
            updated="September 22, 2026"
            updatedIso="2026-09-22"
            readTime="8 min read"
        />

        <p>
            <strong>The short answer:</strong> every Chromebook has a screen recorder built in. Press{' '}
            <code>Shift + Ctrl + Show windows</code> (the Show windows key has a rectangle with two lines and
            sits where F5 would be). A toolbar appears at the bottom of the screen. Click the video camera icon,
            choose full screen, a partial area or a window, click the gear to turn on your microphone, then
            click anywhere to start. Stop with the red button on the shelf. The video saves to Downloads as a
            WebM file.
        </p>
        <p>
            That covers a lesson recap or a quick "here is where the setting is" clip. If you want the recording
            to look good for a class, a customer or a team, a Chrome extension such as Recordio adds auto zoom,
            silence removal, captions and a share link, and it works on school-managed Chromebooks once an admin
            allows it. Both methods are below, along with the audio settings and the usual problems.
        </p>

        <h2 id="built-in">Method 1: The built-in ChromeOS screen recorder</h2>
        <StepList
            steps={[
                {
                    title: 'Open the Screen capture toolbar',
                    body: 'Press Shift + Ctrl + Show windows. You can also click the time in the bottom right to open Quick Settings and choose Screen capture from there.',
                },
                {
                    title: 'Switch to video and choose what to record',
                    body: 'The toolbar defaults to screenshots. Click the video camera icon on the left. Then pick one of the three capture modes: full screen, partial screen (drag a rectangle) or a single window.',
                },
                {
                    title: 'Turn on audio in the gear menu',
                    body: 'Click the gear icon. Toggle Microphone to record your voice. On recent ChromeOS versions you can also choose device audio, which records the sound the Chromebook is playing, and turn on the front camera for a webcam bubble. Show clicks and keys is useful for tutorials.',
                },
                {
                    title: 'Start recording',
                    body: 'Click anywhere on the screen for full screen, or click Record inside the region or window you selected. A three-second countdown runs and then a red stop button appears on the shelf.',
                },
                {
                    title: 'Stop and find the file',
                    body: 'Click the red stop button on the shelf. A notification appears; click it to open the recording. It is saved to Downloads as a WebM file unless you changed the folder in the gear menu.',
                },
            ]}
        />
        <p>
            <strong>What the built-in tool does well:</strong> it is instant, it works offline, and it records
            games and Android apps as well as Chrome. <strong>What it does not do:</strong> any editing. There is
            no trimming, no zoom, no captions, and the WebM file has to be uploaded to Drive, Classroom or
            YouTube before anyone else can watch it. If you need an MP4, you need another tool to convert it.
        </p>

        <h2 id="recordio">Method 2: A Chrome extension for polished walkthroughs</h2>
        <p>
            Chromebooks cannot run the desktop recorders people use on a Mac or PC, so a Chrome extension is
            the natural upgrade. Recordio records the tab you are working in, understands the page, and does
            the editing that would otherwise happen on another computer. You need a free account and an
            internet connection.
        </p>
        <StepList
            steps={[
                {
                    title: 'Add Recordio from the Chrome Web Store',
                    body: (
                        <>
                            Install the extension and sign in. On a school or work Chromebook, an admin may need to
                            allow it first; the{' '}
                            <a href="/for/chromebook/">screen recorder for Chromebook</a> page explains how they can
                            allow the extension by its ID in Google Admin.
                        </>
                    ),
                },
                {
                    title: 'Open the tab you want to record',
                    body: 'Google Classroom, a maths tool, your help centre, a product you support. Click the Recordio icon, pick your microphone and choose the tab. Recording the tab is what lets auto zoom read the page.',
                },
                {
                    title: 'Record',
                    body: 'Click record and work through the task. Auto zoom frames the field, card or menu you use so small text is readable on a phone. Auto spotlight lifts the element you interact with. The simplified toolbar hides your bookmarks and other tabs.',
                },
                {
                    title: 'Tidy up in the editor',
                    body: 'Stop, and the project opens in the web app. Smart AutoCut has removed the dead air while pages loaded. Blur anything sensitive, such as a student name or an account number. On Pro, AI captions are generated with word-level timing and you can edit them in place.',
                },
                {
                    title: 'Share a link or download',
                    body: 'Download 1080p on the free plan or 4K on Pro. On Pro, paste the share link into Classroom or a support reply and see how many people watched and for how long. Recordings sit in a team library so colleagues can reuse them.',
                },
            ]}
        />
        {/* ASSET NEEDED: screenshot of Recordio recording a Google Classroom tab on a Chromebook. Using the captions editor shot until then. */}
        <Figure
            src="/assets/interactive-demo/captions-bar.webp"
            alt="Recordio's caption editor with word-level timing"
            caption="Captions with word-level timing help students who read along or watch without sound (Pro)."
        />
        <p>
            If your school already uses Screencastify, <a href="/compare/screencastify/">Recordio vs Screencastify</a>{' '}
            is an honest comparison, including where Screencastify's classroom features are stronger. Our general{' '}
            <a href="/for/chrome/">Chrome screen recorder</a> page covers how tab recording works in Chrome, Edge
            and Brave.
        </p>

        <h2 id="audio">Recording audio on a Chromebook</h2>
        <h3>Microphone</h3>
        <p>
            The built-in tool and any extension use the input selected in ChromeOS. Open Settings, go to
            Device, then Audio, and pick the microphone under Input. The internal mic is fine for a quiet room.
            A USB or Bluetooth headset is better in a classroom. In the built-in tool, the Microphone toggle in
            the gear menu must be on; in Recordio, choose the mic in the popup before you click record.
        </p>
        <h3>Sound from the Chromebook itself</h3>
        <p>
            To capture a video you are playing or a sound effect in an app, use the device audio option in the
            gear menu of the built-in tool. In Recordio, the sound from the tab you are recording is captured
            with the video, because the browser owns that tab's audio. Wear headphones if you are recording both
            the mic and device audio, or the mic picks up the speakers and you get an echo.
        </p>
        <h3>Microphone permission for extensions</h3>
        <p>
            The first time an extension asks for your mic, Chrome shows a permission prompt. If you clicked
            Block, open <code>chrome://settings/content/microphone</code> and remove the block. On a managed
            Chromebook, an admin policy can also disable the mic for extensions.
        </p>

        <h2 id="troubleshooting">Troubleshooting</h2>
        <h3>1. The screen capture toolbar does not open</h3>
        <p>
            On school and work devices, admins can turn off screen capture with a policy. Nothing on your end
            fixes that; ask your admin. If the shortcut does nothing on a personal Chromebook, try the Quick
            Settings route (click the time, then Screen capture) or check for a ChromeOS update, since the
            toolbar arrived in ChromeOS 89.
        </p>
        <h3>2. The video has no sound</h3>
        <p>
            Nine times out of ten the Microphone toggle in the gear menu was off. It resets between sessions
            on some versions, so check it every time. Then confirm the right input is selected under Settings,
            Device, Audio. For an extension, check the site permission described above.
        </p>
        <h3>3. The recording lags or the file will not upload</h3>
        <p>
            Chromebooks have less CPU and storage than a laptop. Record a partial region or a single window
            instead of the full screen, turn off the camera bubble, and close tabs you are not showing. WebM
            files from the built-in tool are large; upload to Drive rather than emailing them. In Recordio, the
            free plan renders in your browser, so keep the tab open while it exports; Pro renders in the cloud,
            which is the better fit for a Chromebook.
        </p>

        <h2 id="sharing">Where to put the video</h2>
        <p>
            For the built-in tool, the workflow is Downloads, then Google Drive, then a share link or a
            Classroom attachment. Students and colleagues can play WebM in Chrome, but some phone apps cannot.
            With Recordio, the video is already a link and it lives in a library, so a teacher can post the
            same lesson to three classes and a support agent can send the same answer to ten customers without
            re-uploading anything.
        </p>
        <p>
            Teammates on other machines can follow the same steps for{' '}
            <a href="/blog/how-to-record-screen-on-mac-with-audio/">Mac</a> and{' '}
            <a href="/blog/how-to-record-screen-on-ubuntu/">Ubuntu</a>, and our{' '}
            <a href="/blog/best-tutorial-recording-software/">guide to tutorial recording software</a> compares
            the paid tools, including the ones that skip ChromeOS entirely.
        </p>

        <AuthorCard />
    </article>
);

export default HowToChromebookArticle;
