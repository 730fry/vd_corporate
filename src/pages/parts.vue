<script setup>
import cHeadLine from '@/components/commons/cHeadLine.vue'
import cParagraph from '@/components/commons/cParagraph.vue'
import cAnker from '@/components/commons/cAnker.vue'
import pHeadButton from '@/components/parts/pHeadButton.vue'
import pHeadLogo from '@/components/parts/pHeadLogo.vue'
import pNavLink from '@/components/parts/pNavLink.vue'
import tHeaderLabel from '~/components/templates/tHeaderLabel.vue'
import vHeader from '@/components/views/vHeader.vue'
import pHeadLine from '@/components/parts/pHeadLine.vue'
import pSectionArea from '@/components/parts/pSectionArea.vue'
import pNavToggle from '@/components/parts/pNavToggle.vue'
import tHeaderNavBar from '@/components/templates/tHeaderNavBar.vue'
import pNavButtonLink from '@/components/parts/pNavButtonLink.vue'
import pNavCompanyLink from '@/components/parts/pNavCompanyLink.vue'
import pBackTop from '@/components/parts/pBackTop.vue'
import tFooterNav from '@/components/templates/tFooterNav.vue'
import tFooterLabel from '@/components/templates/tFooterLabel.vue'
import tHeaderNavBarMenu from '@/components/templates/tHeaderNavBarMenu.vue'
</script>

<template>
  <vHeader />
  <pSectionArea background="">
    <pHeadLine title="About Us" text="ビジョナリーデザインについて" />

    <cParagraph
      :texts="['こんにちは、世界！', '私たちは']"
      color="main"
      pcnewline="force"
    />

    <cAnker href="/" linkType="INNER">内部リンクです。 </cAnker>

    <cAnker href="https://example.com" linkType="OUTER">外部リンク </cAnker>

    <pHeadButton href="/contact" linkType="OUTER">Contact</pHeadButton>

    <pHeadLogo fileName="vd_logo_lrg.png" />

    <pNavLink />

    <tHeaderLabel />
    <pNavToggle />
    <tHeaderNavBar />
    <pNavButtonLink />
    <pNavCompanyLink />
    <pBackTop />
		<pFooterCopyright/>
		<tFooterNav/>
		<tFooterLabel/>
    <tHeaderNavBarMenu/>
  </pSectionArea>
</template>
