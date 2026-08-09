(function () {
  'use strict';

  var TOS_PANEL =
    '<div id="tos-panel">' +
    '  <p class="mb-4"><strong>Effective Date:</strong> August 5, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> August 5, 2026</p>' +
    '  <p class="mb-4">Welcome to Foodie\'s Corner. These Terms of Service ("Terms") govern your use of the website located at foodiescorner.com (the "Site"), operated by Foodie\'s Corner ("Foodie\'s Corner," "we," "us," or "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.</p>' +
    '  <p class="mb-4">Foodie\'s Corner is a family owned and operated business, operating a network of gas station, convenience store, and deli locations across Texas. Each location may be independently owned or operated under a separate legal entity, but is presented to the public under the shared "Foodie\'s Corner" brand. These Terms apply to your use of the Site and to your interactions with any Foodie\'s Corner location referenced on it.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">1. About This Site</h3>' +
    '  <p class="mb-4">The Site is currently provided for informational purposes, including but not limited to store locations and hours, menu information, careers and job applications, and general company information. The Site does not currently support online ordering, gift cards, or loyalty/rewards programs. If we introduce any of these features in the future, additional terms specific to those features will be posted and will apply to your use of them.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">2. Eligibility and Age-Restricted Products</h3>' +
    '  <p class="mb-2">The Site itself is open to all visitors. However, many products sold at Foodie\'s Corner locations are age-restricted by law, including but not limited to:</p>' +
    '  <ul class="list-disc list-inside space-y-1 mb-4 pl-1">' +
    '    <li>Tobacco and vapor products &mdash; must be 21 years of age or older to purchase</li>' +
    '    <li>Alcoholic beverages &mdash; must be 21 years of age or older to purchase</li>' +
    '    <li>Texas Lottery products &mdash; must be 18 years of age or older to purchase</li>' +
    '  </ul>' +
    '  <p class="mb-4">Valid government-issued photo identification may be required at the point of sale. We reserve the right to refuse sale of any age-restricted product to anyone who cannot provide valid proof of age. Nothing on this Site constitutes an offer to sell age-restricted products to anyone who does not meet the applicable legal age requirement.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">3. Use of the Site</h3>' +
    '  <p class="mb-2">You agree to use the Site only for lawful purposes. You agree not to:</p>' +
    '  <ul class="list-disc list-inside space-y-1 mb-4 pl-1">' +
    '    <li>Use the Site in any way that violates applicable federal, state, or local law</li>' +
    '    <li>Attempt to gain unauthorized access to the Site, its servers, or any connected systems</li>' +
    '    <li>Interfere with or disrupt the Site\'s functioning, including through malware, bots, or automated scraping</li>' +
    '    <li>Copy, reproduce, or republish substantial portions of the Site\'s content without our written permission</li>' +
    '    <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>' +
    '  </ul>' +
    '  <p class="mb-4">We reserve the right to restrict or terminate your access to the Site at our discretion, without notice, for conduct we believe violates these Terms or is otherwise harmful to Foodie\'s Corner or other users.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">4. In-Store Purchases and Pricing</h3>' +
    '  <p class="mb-4">Prices, promotions, product availability, and store hours displayed on the Site are provided for general reference only and may not reflect real-time conditions at any individual location. Fuel prices, menu prices, and product availability are set independently and may vary by location and may change without notice. Your purchase at any Foodie\'s Corner location is governed by the terms and policies of that location at the time of purchase, not solely by information presented on this Site.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">5. Careers and Job Applications</h3>' +
    '  <p class="mb-2">The Site allows prospective employees to view open positions and submit job applications to Foodie\'s Corner locations.</p>' +
    '  <p class="mb-2"><strong>Accuracy of information.</strong> By submitting an application, you represent that all information provided is true, complete, and accurate to the best of your knowledge. Providing false or misleading information may disqualify your application or, if discovered after hire, result in termination.</p>' +
    '  <p class="mb-2"><strong>No guarantee of employment.</strong> Submitting an application does not guarantee an interview, offer of employment, or any form of response. Each hiring location makes its own staffing decisions.</p>' +
    '  <p class="mb-2"><strong>At-will employment.</strong> Employment with any Foodie\'s Corner location, if offered, is generally at-will, meaning either you or the employer may end the employment relationship at any time, with or without cause or notice, except as otherwise required by law or a written agreement signed by an authorized representative.</p>' +
    '  <p class="mb-2"><strong>Equal opportunity.</strong> Foodie\'s Corner locations are equal opportunity employers. Employment decisions are made without regard to race, color, religion, sex, national origin, age, disability, genetic information, or any other characteristic protected by applicable federal, state, or local law.</p>' +
    '  <p class="mb-2"><strong>Background checks.</strong> Some positions may require a background check, drug screening, or other pre-employment screening as permitted by law. By applying, you consent to such screening where applicable and where legally required consent has been obtained separately.</p>' +
    '  <p class="mb-4"><strong>Application data.</strong> Information submitted through the careers section is shared with the relevant hiring location(s) for recruitment purposes and handled in accordance with our Privacy Policy.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">6. Intellectual Property</h3>' +
    '  <p class="mb-4">All content on the Site &mdash; including but not limited to the Foodie\'s Corner name and logo, text, graphics, images, menus, and design elements &mdash; is owned by or licensed to Foodie\'s Corner and is protected by U.S. trademark, copyright, and other intellectual property laws. You may view and print content from the Site for personal, non-commercial use only. Any other use, including reproduction, modification, distribution, or republication, requires our prior written consent.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">7. User-Submitted Content</h3>' +
    '  <p class="mb-4">If you submit messages, feedback, reviews, or other content to us through the Site (for example, via a contact form), you grant Foodie\'s Corner a non-exclusive, royalty-free, worldwide right to use, reproduce, and display that content for purposes related to operating and improving our business, such as responding to your message, internal review, or, with appropriate care, sharing feedback publicly. You agree not to submit content that is unlawful, abusive, defamatory, or that infringes the rights of any third party.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">8. Third-Party Links</h3>' +
    '  <p class="mb-4">The Site may contain links to third-party websites, such as mapping services, social media platforms, or delivery partners. These links are provided for convenience only. We do not control and are not responsible for the content, privacy practices, or availability of any third-party site. Your use of any third-party site is subject to that site\'s own terms and policies.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">9. Cookies and Tracking</h3>' +
    '  <p class="mb-4">Use of the Site involves cookies and similar tracking technologies, including analytics and marketing tools. For details on what we collect, how it\'s used, and your choices regarding cookies, please see our Privacy Policy, which is incorporated into these Terms by reference.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">10. Accessibility</h3>' +
    '  <p class="mb-4">Foodie\'s Corner is committed to making our Site accessible to all visitors, including individuals with disabilities. We aim to follow generally recognized accessibility guidelines and to continually improve the usability of our Site for all users. If you experience difficulty accessing any part of the Site or have suggestions for improvement, please contact us using the information in Section 17, and we will make reasonable efforts to address your concerns.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">11. Disclaimer of Warranties</h3>' +
    '  <p class="mb-4">The Site and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components, or that information on the Site (including hours, pricing, or product availability) is always current or accurate.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">12. Limitation of Liability</h3>' +
    '  <p class="mb-2">To the fullest extent permitted by law, Foodie\'s Corner and its owners, operators, employees, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Site, even if we have been advised of the possibility of such damages. Our total liability for any claim arising from your use of the Site will not exceed one hundred dollars ($100).</p>' +
    '  <p class="mb-4">This section does not limit any liability that cannot be limited or excluded under applicable law.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">13. Indemnification</h3>' +
    '  <p class="mb-4">You agree to indemnify and hold harmless Foodie\'s Corner and its owners, operators, employees, and affiliates from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys\' fees) arising out of your use of the Site, your violation of these Terms, or your violation of any rights of a third party.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">14. Dispute Resolution and Arbitration</h3>' +
    '  <p class="mb-2"><strong>Please read this section carefully &mdash; it affects your legal rights.</strong></p>' +
    '  <p class="mb-2">Any dispute, claim, or controversy arising out of or relating to these Terms or your use of the Site shall be resolved through binding individual arbitration, rather than in court, except that either party may bring an individual claim in small claims court if it qualifies. This means:</p>' +
    '  <ul class="list-disc list-inside space-y-1 mb-4 pl-1">' +
    '    <li>You and Foodie\'s Corner each waive the right to a jury trial.</li>' +
    '    <li>You and Foodie\'s Corner each waive the right to participate in a class action, class arbitration, or representative action. Disputes will be resolved on an individual basis only.</li>' +
    '    <li>Arbitration will be conducted by a neutral arbitrator under a recognized arbitration organization\'s rules, and will take place in Texas or another mutually agreed location, including by phone or videoconference where practical.</li>' +
    '    <li>If any part of this arbitration clause is found unenforceable, the remainder will still apply, except that if the class-action waiver is found unenforceable as to a particular dispute, that dispute will proceed in court rather than in arbitration.</li>' +
    '  </ul>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">15. Governing Law</h3>' +
    '  <p class="mb-4">These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws principles, except where superseded by applicable federal law. Any dispute not subject to arbitration under Section 14 will be brought exclusively in the state or federal courts located in Texas, and you consent to the jurisdiction of those courts.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">16. Changes to These Terms</h3>' +
    '  <p class="mb-4">We may update these Terms from time to time. The "Last Updated" date at the top of this page will reflect the most recent revision. Continued use of the Site after changes are posted constitutes your acceptance of the updated Terms. We encourage you to review this page periodically.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">17. Severability</h3>' +
    '  <p class="mb-4">If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">18. Entire Agreement</h3>' +
    '  <p class="mb-4">These Terms, together with our Privacy Policy, constitute the entire agreement between you and Foodie\'s Corner regarding your use of the Site and supersede any prior agreements.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">19. Contact Us</h3>' +
    '  <p class="mb-4">If you have questions about these Terms, or need to reach us regarding site accessibility, you can contact us at: <a href="mailto:admin@foodiescorner.com" class="text-foodies-orange hover:underline">admin@foodiescorner.com</a></p>' +
    '</div>';

  var PRIVACY_PANEL =
    '<div id="privacy-panel" class="hidden">' +
    '  <p class="mb-4"><strong>Effective Date:</strong> August 4, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> August 4, 2026</p>' +
    '  <p class="mb-2">Foodie\'s Corner ("Foodie\'s Corner," "we," "us," or "our") operates convenience store, gas station, and deli locations across Central Texas, including our Picante Tex-Mex Grill concept, along with the website located at foodiescorner.com (the "Site"). This Privacy Policy explains what information we collect, how we use it, and the choices you have.</p>' +
    '  <p class="mb-4">By using our Site, visiting our locations, or applying for a job with us, you agree to the practices described in this Policy.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">1. Information We Collect</h3>' +
    '  <p class="mb-2"><strong>Information You Provide to Us</strong></p>' +
    '  <ul class="list-disc list-inside space-y-1 mb-4 pl-1">' +
    '    <li><strong>Contact requests:</strong> Name, email address, phone number, and message content when you use a "Contact Us" form or reach out about a specific location.</li>' +
    '    <li><strong>Job applications:</strong> Name, contact information, work history, resume/cover letter content, and any other information you choose to submit through our careers page.</li>' +
    '    <li><strong>Future loyalty/rewards program:</strong> If you sign up, we may collect your name, phone number, email address, birthday (for promotions), and purchase history associated with your account.</li>' +
    '    <li><strong>Future online ordering:</strong> If you place an order through our Site or app, we may collect your name, contact information, order details, and delivery/pickup preferences.</li>' +
    '  </ul>' +
    '  <p class="mb-2"><strong>Information Collected Automatically</strong></p>' +
    '  <p class="mb-2">When you visit our Site, we and our service providers may automatically collect:</p>' +
    '  <ul class="list-disc list-inside space-y-1 mb-4 pl-1">' +
    '    <li>IP address, browser type, device type, and operating system</li>' +
    '    <li>Pages visited, time spent on pages, and referring/exit pages</li>' +
    '    <li>General location information (derived from IP address)</li>' +
    '    <li>Cookies and similar tracking technologies (see Section 5)</li>' +
    '  </ul>' +
    '  <p class="mb-4"><strong>Payment Information.</strong> We do not collect or store payment card information through our Site. In-store purchases are processed by our point-of-sale and payment processing vendors, who maintain their own security and privacy practices for handling payment data. If we launch online ordering in the future, payment processing will be handled by a third-party payment processor, and this Policy will be updated accordingly.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">2. How We Use Your Information</h3>' +
    '  <p class="mb-2">We use the information we collect to:</p>' +
    '  <ul class="list-disc list-inside space-y-1 mb-4 pl-1">' +
    '    <li>Respond to inquiries and provide customer support</li>' +
    '    <li>Review and process job applications</li>' +
    '    <li>Operate and improve our Site</li>' +
    '    <li>Communicate with you about our locations, menu items, and promotions (where you\'ve opted in)</li>' +
    '    <li>Administer our loyalty/rewards program, if and when launched</li>' +
    '    <li>Process and fulfill online orders, if and when launched</li>' +
    '    <li>Monitor and analyze usage trends to improve the Site</li>' +
    '    <li>Comply with legal obligations and protect our rights</li>' +
    '  </ul>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">3. How We Share Your Information</h3>' +
    '  <p class="mb-2">We do not sell your personal information. We may share information with:</p>' +
    '  <ul class="list-disc list-inside space-y-1 mb-4 pl-1">' +
    '    <li><strong>Service providers</strong> who help us operate our business (e.g., website hosting, email/marketing platforms, analytics providers, payment processors, background-check vendors for hiring)</li>' +
    '    <li><strong>Legal and safety purposes</strong>, such as complying with a subpoena, law, or legal process, or protecting the rights, property, or safety of Foodie\'s Corner, our customers, or others</li>' +
    '    <li><strong>Business transfers</strong>, such as a merger, acquisition, or sale of assets, in which case personal information may be part of the transferred assets</li>' +
    '  </ul>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">4. Job Applicants</h3>' +
    '  <p class="mb-4">If you apply for a position at Foodie\'s Corner through our careers page, the information you submit (resume, work history, contact details) is used solely for recruiting and hiring purposes. We may share this information with the specific location\'s hiring managers and, where applicable, background-check or reference-check vendors. Application information is retained for a reasonable period to support our hiring process and may be kept longer if you are hired.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">5. Cookies and Tracking Technologies</h3>' +
    '  <p class="mb-2">Our Site may use cookies, pixels, and similar technologies from third parties &mdash; for example, website analytics tools (such as Google Analytics) and marketing/advertising tools (such as Meta/Facebook Pixel) &mdash; to understand how visitors use our Site and to deliver relevant advertising. These tools may collect information such as pages viewed, time on site, and general location.</p>' +
    '  <p class="mb-4">You can control cookies through your browser settings, including blocking or deleting them. Note that disabling cookies may affect how parts of our Site function. We will update this section with specific tool names once our current marketing/analytics setup is finalized.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">6. Data Retention</h3>' +
    '  <p class="mb-4">We retain personal information for as long as necessary to fulfill the purposes described in this Policy, unless a longer retention period is required by law (for example, employment or tax recordkeeping requirements).</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">7. Your Choices and Rights</h3>' +
    '  <p class="mb-2"><strong>Marketing communications:</strong> You may opt out of promotional emails or texts at any time by following the unsubscribe instructions included in those messages, or by contacting us directly.</p>' +
    '  <p class="mb-2"><strong>Texas residents:</strong> Depending on the volume and nature of data we process, you may have rights under the Texas Data Privacy and Security Act (TDPSA), including the right to access, correct, delete, or obtain a portable copy of your personal data, and to opt out of certain data processing (such as targeted advertising or sale of personal data). To exercise these rights, contact us using the information in Section 10.</p>' +
    '  <p class="mb-4">We do not knowingly collect personal information from children under 13. Our loyalty program and online ordering, if launched, will not be directed at or knowingly used to collect information from children.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">8. Data Security</h3>' +
    '  <p class="mb-4">We use reasonable administrative, technical, and physical safeguards designed to protect personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">9. Changes to This Policy</h3>' +
    '  <p class="mb-4">We may update this Privacy Policy from time to time, particularly as we launch new features like loyalty rewards or online ordering. The "Last Updated" date at the top of this page reflects the most recent revision. We encourage you to review this Policy periodically.</p>' +

    '  <h3 class="font-headline-md text-headline-md text-timber-brown font-bold mt-6 mb-2">10. Contact Us</h3>' +
    '  <p class="mb-4">If you have questions about this Privacy Policy or how we handle your information, please contact us at:<br>By Mail: 1487 N HWY 183, Liberty Hill, Texas 78642<br>or <a href="mailto:admin@foodiescorner.com" class="text-foodies-orange hover:underline">admin@foodiescorner.com</a></p>' +
    '</div>';

  var MODAL_HTML =
    '<div id="legal-overlay" class="hidden fixed inset-0 z-[100] bg-[#1c1c19]/80 backdrop-blur-sm items-center justify-center p-4 overflow-y-auto">' +
    '  <div class="bg-warm-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 flex flex-col max-h-[85vh] overflow-hidden">' +
    '    <div class="flex items-center justify-between px-6 py-4 border-b border-limestone shrink-0">' +
    '      <h2 id="legal-title" class="font-headline-lg text-headline-lg text-timber-brown font-bold">Terms of Service</h2>' +
    '      <button data-legal-close type="button" aria-label="Close" class="text-timber-brown p-2 hover:opacity-70 transition-opacity shrink-0">' +
    '        <span style="font-size:28px; line-height:1;">&times;</span>' +
    '      </button>' +
    '    </div>' +
    '    <div class="flex items-center gap-2 px-6 py-3 border-b border-limestone shrink-0 bg-surface-container-low">' +
    '      <button id="tab-tos" type="button" class="flex-1 font-label-md text-label-md font-semibold px-4 py-2 rounded-full transition-colors">Terms of Service</button>' +
    '      <button id="tab-privacy" type="button" class="flex-1 font-label-md text-label-md font-semibold px-4 py-2 rounded-full transition-colors">Privacy Policy</button>' +
    '    </div>' +
    '    <div id="legal-scroll" class="px-6 py-6 flex-1 min-h-0 overflow-y-auto text-on-surface font-body-md text-body-md leading-relaxed">' +
    TOS_PANEL +
    PRIVACY_PANEL +
    '    </div>' +
    '    <div class="px-6 py-4 border-t border-limestone flex justify-end shrink-0">' +
    '      <button data-legal-close type="button" class="bg-foodies-orange text-white font-label-md text-label-md font-semibold px-6 py-2 rounded-full hover:bg-primary-container transition-colors">Close</button>' +
    '    </div>' +
    '  </div>' +
    '</div>';

  var ACTIVE_TAB = 'bg-foodies-orange text-white shadow-sm';
  var INACTIVE_TAB = 'text-timber-brown hover:bg-surface-container-low';

  var currentTab = 'tos';

  function setTab(tab) {
    currentTab = tab;
    var tosPanel = document.getElementById('tos-panel');
    var privacyPanel = document.getElementById('privacy-panel');
    var tabTos = document.getElementById('tab-tos');
    var tabPrivacy = document.getElementById('tab-privacy');
    var title = document.getElementById('legal-title');

    if (tab === 'privacy') {
      tosPanel.classList.add('hidden');
      privacyPanel.classList.remove('hidden');
      tabTos.className = 'flex-1 font-label-md text-label-md font-semibold px-4 py-2 rounded-full transition-colors ' + INACTIVE_TAB;
      tabPrivacy.className = 'flex-1 font-label-md text-label-md font-semibold px-4 py-2 rounded-full transition-colors ' + ACTIVE_TAB;
      title.textContent = 'Privacy Policy';
    } else {
      privacyPanel.classList.add('hidden');
      tosPanel.classList.remove('hidden');
      tabPrivacy.className = 'flex-1 font-label-md text-label-md font-semibold px-4 py-2 rounded-full transition-colors ' + INACTIVE_TAB;
      tabTos.className = 'flex-1 font-label-md text-label-md font-semibold px-4 py-2 rounded-full transition-colors ' + ACTIVE_TAB;
      title.textContent = 'Terms of Service';
    }
    document.getElementById('legal-scroll').scrollTop = 0;
  }

  function openModal(tab) {
    var overlay = document.getElementById('legal-overlay');
    if (!overlay) return;
    setTab(tab);
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var overlay = document.getElementById('legal-overlay');
    if (!overlay) return;
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
    document.body.style.overflow = '';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.createElement('div');
    container.innerHTML = MODAL_HTML;
    document.body.appendChild(container);

    var overlay = document.getElementById('legal-overlay');

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.closest('[data-legal-close]')) {
        closeModal();
      }
    });

    document.getElementById('tab-tos').addEventListener('click', function () {
      setTab('tos');
    });
    document.getElementById('tab-privacy').addEventListener('click', function () {
      setTab('privacy');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    setTab('tos');

    var links = document.querySelectorAll('a');
    links.forEach(function (a) {
      if (a.getAttribute('href') !== '#' && a.getAttribute('href') !== '') return;
      var text = a.textContent.trim();
      if (text === 'Terms of Service') {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          openModal('tos');
        });
      } else if (text === 'Privacy Policy') {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          openModal('privacy');
        });
      }
    });
  });
})();
