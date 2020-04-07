// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
{
	title:'4/7/20 | Developing in Linux, on Windows',
	slug: 'linux-vscode-windows',
	html:`
	
	<article>
	<p>I am writing this article because I've seen through my normal social channels that many programmers aren't aware or don't want to invest time in learning how they can develop in a linux environment on windows.
		<br>
		Today I will go over how you can set up a brand new, clean developing environment that will closely mirror the system that you will end up deploying to.
	</p>
	<h2>Getting Started</h2>
	<h3>Requirements</h3>
	<p>The only requirements here are a computer running Windows 10, an internet connection, and about 30 minutes of free time.</p>
	<h3>Installation of WSL</h3>
	<p>
		The first thing we need to get started on is installing Windows Subsystem Linux (which I will refer to as WSL from here forward).
		<br>
		The full instructions can be found <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10" target="_blank">here</a>, but I'll go over the important bits:
		<br>
		<ul>
			<li>
				Open PowerShell as Administrator
			</li>
			<li>Enter <code>Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux</code></li>
			<li>Restart the computer</li>
			<li>
				Open Microsoft Store
			</li>
			<li>
				Search for Linux and 'Get' your preferred distro. I'm using Ubuntu, but you may want to use what you will be deploying to in production.
			</li>
			<li>*Note: If this doesn't work for you, there are PowerShell options as well, please see the Microsoft link above.</li>
			<li>Launch the distro once to initialize it; you can do this by launching it from the Start Menu.</li>
			<li>Create a new user account, and update + upgrade</li>
			
		</ul>
		Awesome! Now you have a Linux terminal from your comfy Win10 environment. But it gets better.
	</p>
	<h2>
	Integrating into Visual Studio Code
	</h2>
	<p>
		<h3>
			VSCode Installation
		</h3>
		Optional: I recommend taking this time to install <a href="https://code.visualstudio.com/insiders/" target="_blank">Visual Studio Code Insiders</a>, as this will present you with a fresh copy of VSCode and gives you access to features like settings Sync.
		<br>
		I use the insiders build as well as github to develop from any computer with close to zero downtime switching between environments.
	</p>
	<h3>VSCode Setup</h3>
	<p>
		On first launch, VSCode should prompt you to install the "Remote-WSL" package. Do this.
		<br>
		If you do not see this prompt, go into the extensions tab and install it there.
		<br>
		We're almost done, just follow these steps:
		<ul>
			<li>
				Click on the 'Remote Explorer' Tab.
			</li>
			<li>
				You will see Ubuntu as a WSL target, right click and 'Connect to WSL'
			</li>
			<li>
				VSCode will launch a new Window that is in a linux environment. Press <code>CTRL + ~</code> to open the terminal and verify Linux is running.
			</li>
			
		</ul>
		You're done, you can start a new project within your Linux VSCode. <br>
		<br>
		You can also import existing projects fairly easily.
		<br>
		For example, install node and npm, set your github name and username, clone the project you're working on and log in, and <code>npm i</code> to install the packages. All done!
	</p>
	`
},

	{
		title: '8/1/19 | RuneLite on Android',
		slug: 'runelite-on-android',
		html: `
		<article>
		<p><strong>UPDATE 2020 - THIS IS NO LONGER AVAILABLE IF YOU HAVE UPGRADED TO ANDROID 10.</strong></p>
		<p>When Jagex released <a href="https://oldschool.runescape.com/mobile">OldSchool RuneScape mobile</a>, it changed the way many of us play OSRS, giving us a fresh new way to play certain activities.And while the touchscreen controls are fairly decent, and the mobile app in general makes for a great experience &ndash; there is very little support for mouse and keyboard peripherals and the additional quality of life features you get with <a href="https://runelite.net/">RuneLite</a>.</p>
		

		
		<p>Enter<a href="https://www.samsung.com/global/galaxy/apps/samsung-dex/"> Samsung Dex</a>, and <a href="https://www.linuxondex.com/">Linux on Dex</a>.</p>
		
		
		
		<p>With Samsung&rsquo;s offering, we are easily able to get a full copy of RuneLite running natively on Android.</p>
		
		
		
		<h2>Getting Started</h2>
		
		
		
		<p><strong>You will need one of the following devices:</strong></p>
		
		
		
		<ul>
		<li>Note 8</li>
		<li>Note 9</li>
		<li>Note 10 / 10+</li>
		<li>Galaxy S8 / 8+</li>
		<li>Galaxy S9 / S9+</li>
		<li>Galaxy S10e / S10 / S10+ (Tested with Runelite, works great)</li>
		<li>Tab S4</li>
		<li>Tab S5e (tested with Runelite, works great)</li>
		<li>Tab S6</li>
		</ul>
		
		
		
		<p><strong>As well as these downloads:</strong></p>
		
		
		
		<p><a href="https://webview.linuxondex.com/">Ubuntu Image</a> - If you are unable to download this through the Linux on Dex App, you may need to use a download manager.</p>
		
		
		
		<p><a href="https://www.apkmirror.com/apk/samsung-electronics-co-ltd/linux-on-dex-beta/linux-on-dex-beta-1-0-51-release/linux-on-dex-beta-1-0-51-android-apk-download/">Linux on Dex APK</a></p>
		
		
		
		<h2>Booting Linux on Android</h2>
		
		
		
		<p>1. Once the Ubuntu image and Linux on Dex are downloaded from the above, go ahead and enter Samsung Dex &ndash; this can be reached in the drop-down menu on tablets, or by plugging your phone to a monitor with a USB C to HDMI cable.&nbsp;</p>
		
		
		
		<p>2. Once Samsung Dex has been launched, open the Linux on Dex application.&nbsp;</p>
		
		
		
		<p>3. At the bottom, select the (+) button, then browse for the downloaded image file. Then tap &ldquo;Create&rdquo; &nbsp;&nbsp;</p>
		
		
		
		<p>4. Hit &ldquo;Browse&rdquo; on the next screen. &nbsp;</p>
		
		
		
		<p>&nbsp;5. Select the image &nbsp;&nbsp;</p>
		
		
		
		<p>6. Set a name and size for the container, then click create.&nbsp;</p>
		
		
		
		<p>7. Hit the large run button in the upper left; congratulations, you&rsquo;re in Linux on Dex!</p>
		
		
		
		<h2>Starting RuneLite</h2>
		
		
		
		<p>&nbsp;Linux on Dex will automatically open the terminal Window, we&rsquo;re going to use the following commands to download and set up runelite:</p>
		
		
		
		<pre ><code>mkdir runelite</code></pre>
		
		
		
		<pre ><code>cd runelite</code></pre>
		
		
		
		<pre ><code>wget https://github.com/runelite/launcher/releases/download/1.6.2/RuneLite.jar</code></pre>
		
		
		
		<pre ><code>cat &gt; run.sh</code></pre>
		
		
		
		<p>Right click and paste this:</p>
		
		
		
		<pre ><code>java -jar RuneLite.jar --mode=OFF</code></pre>
		
		
		
		<p>Press Control + D</p>
		
		
		
		<p>You&rsquo;re good to go. Whenever you want to Launch runelite just open the terminal and type:</p>
		
		
		
		<pre><code>cd runelite</code></pre>
		
		
		
		<pre><code>sh run.sh</code></pre>
		
		
		
		<p>That's it! now you can have RuneLite on the go.</p>
		</article>

`		
	},

];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
