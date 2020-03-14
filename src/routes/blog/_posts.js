// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'RuneLite on Android',
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
		
		
		
		<pre class="wp-block-code"><code>mkdir runelite</code></pre>
		
		
		
		<pre class="wp-block-code"><code>cd runelite</code></pre>
		
		
		
		<pre class="wp-block-code"><code>wget https://github.com/runelite/launcher/releases/download/1.6.2/RuneLite.jar</code></pre>
		
		
		
		<pre class="wp-block-code"><code>cat &gt; run.sh</code></pre>
		
		
		
		<p>Right click and paste this:</p>
		
		
		
		<pre class="wp-block-code"><code>java -jar RuneLite.jar --mode=OFF</code></pre>
		
		
		
		<p>Press Control + D</p>
		
		
		
		<p>You&rsquo;re good to go. Whenever you want to Launch runelite just open the terminal and type:</p>
		
		
		
		<pre class="wp-block-code"><code>cd runelite</code></pre>
		
		
		
		<pre class="wp-block-code"><code>sh run.sh</code></pre>
		
		
		
		<p>That's it! now you can have RuneLite on the go.</p>
		</article>

`		
	},

];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
