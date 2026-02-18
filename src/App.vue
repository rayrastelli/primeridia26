<script setup lang="ts">
const team = [
  { name: 'Tony Smercina', role: 'Managing Partner' },
  { name: 'Matt Frazier', role: 'Managing Partner' },
  { name: 'Erik Tomalis', role: 'Managing Partner' },
  { name: 'Ray Rastelli', role: 'Managing Partner' },
]
</script>

<template>
  <div class="min-h-screen bg-white text-gray-800">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <a href="#" class="block">
          <img src="/primeridia_web_logo_color-01.png" alt="Primeridia" class="h-12 w-auto" />
        </a>
          <nav class="flex items-center gap-6">
            <a href="#" class="text-gray-700 hover:text-brand transition">Home</a>
            <a href="#contact" class="text-gray-700 hover:text-brand transition">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative min-h-[70vh] flex items-center justify-center bg-slate-900 pt-20 bg-cover bg-center" style="background-image: url('/conf-table.jpg')">
      <div class="absolute inset-0 bg-slate-900/60" />
      <div class="relative max-w-5xl mx-auto px-4 text-center text-white">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Mid-level Giving Specialists
        </h1>
        <p class="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
          We help you identify, cultivate, upgrade and steward your future major donors!
        </p>
      </div>
    </section>

    <!-- Proven Results + Video -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Results from Experienced Professionals
            </h2>
            <p class="text-gray-600 mb-4">
              The Primeridia team has over 50 years of combined fundraising experience. Over the last 20 years we have managed over 25,000 face-to-face donor visits. In fact, these visits have resulted in a gift over 40% of the time. Does your organization need to build the next generation of major donors?
            </p>
            <p class="text-gray-600">
              Please watch our introductory video to learn about Primeridia and how we help organizations Maximize the Middle!
            </p>
          </div>
          <div class="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/6hNbJWq-jEQ"
              title="Primeridia - Maximize the Middle"
              class="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Color bar -->
    <div class="flex">
      <div class="flex-1 h-1 bg-brand" />
      <div class="flex-1 h-1 bg-brand-light" />
      <div class="flex-1 h-1 bg-brand" />
      <div class="flex-1 h-1 bg-brand-lighter" />
    </div>

    <!-- Team -->
    <!-- <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="member in team" :key="member.name" class="text-center">
            <div class="aspect-square rounded-full bg-slate-200 mb-4 mx-auto max-w-[200px] overflow-hidden flex items-center justify-center">
              <span class="text-4xl font-bold text-slate-400">{{ member.name.split(' ').map(n => n[0]).join('') }}</span>
            </div>
            <h3 class="font-bold text-lg text-gray-900">{{ member.name }}</h3>
            <p class="text-brand font-medium">{{ member.role }}</p>
            <p class="text-sm text-gray-500">Primeridia</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- What we can do - Color bar + heading -->
    <div class="flex">
      <div class="flex-[1] h-1 bg-brand-lighter" />
      <div class="flex-[3] h-1 bg-brand flex items-center justify-center py-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white">What we can do for you</h2>
      </div>
      <div class="flex-[1] h-1 bg-brand-light" />
    </div>

    <!-- Three icon boxes -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-12">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand text-2xl">$</div>
            <div>
              <h3 class="font-bold text-xl text-gray-900 mb-2">Increase Unrestricted Dollars</h3>
              <p class="text-gray-600">The Primeridia Mid-level program is a proven way to upgrade your annual donors and significantly grow your unrestricted income.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand text-2xl">⟡</div>
            <div>
              <h3 class="font-bold text-xl text-gray-900 mb-2">Identify New Major Donors</h3>
              <p class="text-gray-600">The result of a successful mid-level program is major donor identification. If you are preparing for a capital campaign, a Primeridia program can be transformative.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand text-2xl">↑</div>
            <div>
              <h3 class="font-bold text-xl text-gray-900 mb-2">Take You to the Next Level</h3>
              <p class="text-gray-600">Many non-profits are looking for new ways to break-out of the status-quo and take their organization to the next level. The Primeridia Mid-level Giving Program can help you get there.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why consider - Image + text -->
    <section class="grid md:grid-cols-2">
      <div class="min-h-[300px] bg-slate-300">
        <img src="/istock_pic_272.jpg" alt="" class="w-full h-full object-cover" />
      </div>
      <div class="bg-gray-100 p-12 md:p-20 flex flex-col justify-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why consider Primeridia?</h2>
        <div class="space-y-4 text-gray-600">
          <p>A gap exists in every non-profit organization's donor file. Annual fund programs, which are traditionally driven by direct mail, telemarketing and email solicitations, have a limit to the amount a donor is willing to give. Typically, this "donation ceiling" is $1000. However, major gifts usually start above the $10,000-$25,000 level. This leaves a significant gap in the donor file that we see as your greatest opportunity.</p>
          <p>Over the last 20 years we have developed a proven process to help organizations leverage their mid-level giving opportunity with game-changing results. How do we do it? We visit face-to-face with your loyal annual fund donors, and in some cases, with a targeted group of your non-donors. Sounds crazy, right? It's not. In fact, the organizations that utilize this strategy build strong relationships with their donors since a gift officer visit to a lower level donor is considered an honor. Many donors are impressed that we would make the investment in them, which in-turn results in larger gifts and a stronger future opportunity. Over the last 20 years, we have managed over 20,000 donor visits and raised over $20,000,000 for our clients.</p>
          <p>With Primeridia, you receive a turnkey suite of software and services that enables you to take your development program to the next level. Each time we work with a new client we start with an Assessment. Once we complete the assessment phase, we recruit, train and manage your mid-level giving officers with our proprietary software tool called Velocity. This goal-setting and visit management tool enables each gift officer to make a minimum of 250 donor visits per year.</p>
          <p>The Primeridia Mid-level Giving Program is a proven process which enables you to grow your unrestricted dollars and identify new major donors.</p>
          <p>If you are intrigued by this unique approach to fundraising, we would love to connect with you.</p>
        </div>
      </div>
    </section>

    <!-- Color bar -->
    <div class="flex">
      <div class="flex-1 h-1 bg-brand" />
      <div class="flex-1 h-1 bg-brand-dark" />
      <div class="flex-1 h-1 bg-brand-light" />
      <div class="flex-1 h-1 bg-brand-lighter" />
    </div>

    <!-- CTA Contact -->
    <section id="contact" class="relative py-24 bg-slate-900">
      <div class="absolute inset-0 bg-black/80" />
      <div class="relative max-w-3xl mx-auto px-4 text-center text-white">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Let's Connect Today!</h2>
        <p class="text-xl text-slate-200 mb-8">
          Want to know more about how Primeridia can transform your development program? Please click below and complete the following form.
        </p>
        <a href="#contact" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition">
          Contact Us
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-800 text-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 class="font-bold text-white text-lg mb-2">Primeridia, LLC</h3>
            <p>The Mid-level Giving Specialists</p>
          </div>
          <div>
            <h3 class="font-bold text-white text-lg mb-2">Primeridia Home Office</h3>
            <p>2552 Blue Meadow Dr<br>Temple, TX 76502</p>
            <p>+214-886-8588</p>
          </div>
          <div>
            <h3 class="font-bold text-white text-lg mb-2">Office Hours</h3>
            <p>Mon-Fri: 8:30am - 5:00pm Central</p>
          </div>
        </div>
        <div class="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span class="text-slate-400 text-sm">© Copyright - Primeridia, LLC</span>
          <nav class="flex gap-6">
            <a href="#" class="hover:text-white transition">Home</a>
            <a href="#contact" class="hover:text-white transition">Contact Us</a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>
