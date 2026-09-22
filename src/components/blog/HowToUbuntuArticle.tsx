import { ArticleHeader, AuthorCard, StepList, Figure } from './ArticleMeta';

/**
 * Facts checked 2026-09-22: GNOME's built-in screencast (help.gnome.org, screen-shot-record) saves
 * WebM to ~/Videos/Screencasts and records no audio; OBS Studio and Kooha are free and record
 * microphone plus desktop audio; Chrome on Linux captures tab audio but not desktop audio for
 * full-screen capture.
 */
const HowToUbuntuArticle = () => (
    <article className="prose max-w-3xl mx-auto px-6 py-10 md:py-14">
        <ArticleHeader
            eyebrow="How-to"
            title="How to Record Your Screen on Ubuntu (With Audio)"
            updated="September 22, 2026"
            updatedIso="2026-09-22"
            readTime="8 min read"
        />

        <p>
            <strong>The short answer:</strong> Ubuntu 22.04 and 24.04 ship with a screen recorder built into
            GNOME. Press <code>Ctrl+Alt+Shift+R</code> to start recording and press it again to stop. The file
            lands in <code>~/Videos/Screencasts</code> as a WebM. The catch is that it records no audio at all,
            not your microphone and not the sound from your apps.
        </p>
        <p>
            If you need audio, install OBS Studio (<code>sudo apt install obs-studio</code>) or Kooha. Both are
            free, both work on Wayland, and both record your mic and desktop audio. If you are recording a
            walkthrough of a web app that other people will watch, the third option is Recordio, a Chrome
            extension that records the tab, zooms in on what you click, cuts the silence and gives you a link
            to share. All three methods are below, with the audio settings that trip people up.
        </p>

        <h2 id="gnome">Method 1: The built-in GNOME recorder (no audio)</h2>
        <p>
            This is the fastest way to grab a quick clip on Ubuntu, and it needs nothing installed. It has been
            part of GNOME since version 42, so it is on Ubuntu 22.04 LTS, 24.04 LTS and every release since.
        </p>
        <StepList
            steps={[
                {
                    title: 'Open the screenshot tool',
                    body: 'Press the Print key, or open the system menu in the top right and click the camera icon. A small toolbar appears in the middle of the screen.',
                },
                {
                    title: 'Switch to video mode',
                    body: 'Click the video camera icon on the toolbar. Choose Selection to drag out a region or Screen to record everything.',
                },
                {
                    title: 'Start recording',
                    body: 'Click the round red button. A red indicator with a timer appears in the top right of the screen. The shortcut Ctrl+Alt+Shift+R does the same thing without opening the toolbar.',
                },
                {
                    title: 'Stop and find the file',
                    body: 'Click the red indicator or press Ctrl+Alt+Shift+R again. The recording saves to ~/Videos/Screencasts as a WebM file named Screencast followed by the date and time.',
                },
            ]}
        />
        <p>
            What you get is a raw capture. There is no audio, no editing, and no way to change the output format
            without another tool. It is fine for a bug report or a ten-second clip in a chat message. For
            anything with narration, keep reading.
        </p>

        <h2 id="obs">Method 2: OBS Studio (microphone and desktop audio)</h2>
        <p>
            OBS Studio is free, open source and the most capable recorder on Linux. It is built for live
            streaming, which is why it looks intimidating, but for a plain screen recording you only need
            one source and two audio tracks.
        </p>
        <StepList
            steps={[
                {
                    title: 'Install OBS',
                    body: (
                        <>
                            Run <code>sudo apt install obs-studio</code>. If your Ubuntu version ships an old
                            release, install the Flatpak from Flathub instead (<code>com.obsproject.Studio</code>) or
                            add the official PPA. The Flatpak works well on Wayland.
                        </>
                    ),
                },
                {
                    title: 'Add a screen source',
                    body: 'In the Sources panel click the plus button. On a Wayland session (the Ubuntu default) choose Screen Capture (PipeWire); your desktop will show a picker for the screen or window. On an Xorg session choose Screen Capture (XSHM).',
                },
                {
                    title: 'Check the audio mixer',
                    body: 'The Audio Mixer panel should show two meters, Desktop Audio and Mic/Aux. Speak and play something; both should move. If one is missing, add it in Settings, then Audio, under Global Audio Devices.',
                },
                {
                    title: 'Set the output',
                    body: 'Open Settings, then Output. Set the recording path, pick a quality preset, and choose MKV as the format. MKV survives a crash mid-recording; you can remux it to MP4 afterwards from the File menu.',
                },
                {
                    title: 'Record',
                    body: 'Click Start Recording in the bottom right. Click Stop Recording when you are done. The file is in the folder you set in step 4.',
                },
            ]}
        />
        <p>
            <strong>A lighter alternative:</strong> Kooha is a small GTK app made for Wayland. Install it from
            Flathub (<code>io.github.seadve.Kooha</code>), toggle the microphone and desktop audio icons, pick a
            screen or window, and click record. It saves MP4, WebM, MKV or GIF. It has none of OBS's
            configuration and none of its flexibility, which is exactly right for most people.
        </p>

        <h2 id="recordio">When you want a polished walkthrough</h2>
        <p>
            OBS and Kooha give you a raw file. If the recording is going to a customer, a teammate or a docs
            page, someone still has to trim it, zoom in on the small text, add captions and upload it
            somewhere. That is the part Recordio automates. It runs as an extension in Chrome, Chromium, Edge
            or Brave on any distro, so there is no package to install and nothing that needs sudo. You do need
            a free account.
        </p>
        <StepList
            steps={[
                {
                    title: 'Install the extension and sign in',
                    body: (
                        <>
                            Add Recordio from the Chrome Web Store and sign in with a free account. Our{' '}
                            <a href="/for/linux/">screen recorder for Linux</a> page lists the distros and
                            browsers we have tested.
                        </>
                    ),
                },
                {
                    title: 'Pick the tab and your microphone',
                    body: 'Open the tab with the product you want to walk through, click the Recordio icon and choose your mic. Recording the tab, rather than the whole screen, is what lets Recordio read the page.',
                },
                {
                    title: 'Record',
                    body: 'Click record and use the product as you normally would. Auto zoom frames each input, card or menu you interact with, and auto spotlight lifts the element off the page. The simplified toolbar hides your bookmarks and other tabs.',
                },
                {
                    title: 'Review in the editor',
                    body: 'When you stop, the project opens in the web app. Smart AutoCut has already removed the silence while keeping the pauses where you were typing or clicking. Every zoom is an editable keyframe. On Pro, AI captions come with word-level timing; delete a caption line to cut that segment.',
                },
                {
                    title: 'Download or share a link',
                    body: 'Download 1080p on the free plan or 4K on Pro. Pro also gives you a share link with view counts and watch time, and a team library so the rest of your team can find the video later.',
                },
            ]}
        />
        {/* ASSET NEEDED: screenshot of the Recordio popup on Ubuntu with the mic picker visible. Using the editor shot until then. */}
        <Figure
            src="/assets/interactive-demo/editor.webp"
            alt="The Recordio editor after a recording, showing zoom keyframes on the timeline"
            caption="After you stop, the recording opens in the editor with zooms placed and silence already cut."
        />
        <p>
            For a side-by-side look at where OBS is the better tool, read{' '}
            <a href="/compare/obs/">Recordio vs OBS</a>. If you are new to walkthrough videos, our guide on{' '}
            <a href="/blog/how-to-make-a-product-walkthrough-video/">how to make a product walkthrough video</a>{' '}
            covers scripting and length.
        </p>

        <h2 id="audio">Getting the audio right on Ubuntu</h2>
        <h3>Microphone</h3>
        <p>
            Ubuntu 22.10 and later use PipeWire; earlier releases use PulseAudio. Either way, open Settings,
            then Sound, and check the Input section. Pick the right device and talk; the level meter should
            move. If it does not, the mic is muted or the wrong input is selected. Every recorder, including
            OBS, Kooha and Recordio, uses whatever input the system reports here.
        </p>
        <h3>Desktop (system) audio</h3>
        <p>
            OBS's Desktop Audio track listens to your default output device. If you switch to headphones after
            starting OBS, go to Settings, then Audio, and pick the new device. Wear headphones while
            recording, otherwise your mic picks up the speakers and you get an echo. Kooha records desktop
            audio when the speaker icon is toggled on.
        </p>
        <p>
            In Chrome-based recorders such as Recordio, audio from the page is captured when you record a
            tab, because the browser owns that tab's sound. Full-screen and window capture on Linux record
            your microphone but not desktop audio; that is a limitation of Chrome on Linux, not of the
            extension.
        </p>

        <h2 id="troubleshooting">Troubleshooting</h2>
        <h3>1. OBS shows a black screen</h3>
        <p>
            You are almost certainly on Wayland with an XSHM source. Remove it and add Screen Capture
            (PipeWire) instead. If the picker never appears, install <code>xdg-desktop-portal-gnome</code>{' '}
            (or the KDE equivalent) and log out and back in. As a last resort, choose the "Ubuntu on Xorg"
            session at the login screen.
        </p>
        <h3>2. The recording has no sound</h3>
        <p>
            Check three places in this order. First, the mixer in OBS: a muted track shows a red speaker
            icon. Second, Settings, then Audio, where the mic device may be set to Disabled. Third, open{' '}
            <code>pavucontrol</code> (or <code>pwvucontrol</code> on PipeWire), go to the Recording tab while
            OBS is running, and confirm it is attached to the right source. In Recordio, make sure you chose
            a mic in the popup and that the browser has microphone permission for the extension.
        </p>
        <h3>3. Playback stutters or the file is huge</h3>
        <p>
            Drop to 30 frames per second and 1080p in OBS's Output and Video settings, and try the VAAPI
            hardware encoder on Intel or AMD graphics. Close what you are not showing. For Recordio, the
            free plan renders in your browser, so keep that tab in focus while it exports; Pro renders in the
            cloud so you can close the tab.
        </p>

        <h2 id="which">Which method should you use?</h2>
        <div className="overflow-x-auto">
            <table>
                <thead>
                    <tr>
                        <th>Need</th>
                        <th>Use</th>
                        <th>Why</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>A silent clip in ten seconds</td><td>GNOME recorder</td><td>Already installed, one shortcut</td></tr>
                    <tr><td>Narrated recording, any app, any length</td><td>OBS or Kooha</td><td>Free, records mic and desktop audio</td></tr>
                    <tr><td>A web app walkthrough to share with people</td><td>Recordio</td><td>Auto zoom, AutoCut, captions, share link, team library</td></tr>
                    <tr><td>Recording a game or a stream</td><td>OBS</td><td>Scenes, overlays, hardware encoding</td></tr>
                </tbody>
            </table>
        </div>
        <p>
            Whatever you choose, do a five-second test recording first and play it back. Most "my Ubuntu
            recording has no audio" problems show up right there, before you have recorded twenty minutes.
            If you also work on other machines, the same steps for{' '}
            <a href="/blog/how-to-record-screen-on-mac-with-audio/">Mac</a> and{' '}
            <a href="/blog/how-to-screen-record-on-chromebook/">Chromebook</a> are on the blog, and our{' '}
            <a href="/blog/best-screen-recorders-2026/">ranked list of screen recorders</a> covers the paid
            options.
        </p>

        <AuthorCard />
    </article>
);

export default HowToUbuntuArticle;
