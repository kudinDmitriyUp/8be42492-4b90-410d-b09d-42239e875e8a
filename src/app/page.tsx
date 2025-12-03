"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Zap, Trophy, Award, Users, HelpCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="animatedAurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Elite Football Coach"
          button={{
            text: "Book Session",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Elite Football Coaching for Champions"
          description="Unlock your full potential with personalized coaching from experienced professionals. We develop champions through proven training methods and dedicated mentorship."
          tag="Professional Coaching"
          tagIcon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788108547-tjza8p3h.jpg"
          imageAlt="Professional football coach training athletes"
          frameStyle="card"
          buttons={[
            {
              text: "Start Your Journey",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Our Coaching"
          description={[
            "With over 20 years of experience in football development, we have trained hundreds of athletes who went on to play at collegiate and professional levels.",
            "Our approach combines cutting-edge training techniques with personalized attention to develop each player's unique skills and athletic potential."
          ]}
          showBorder={true}
        />
      </div>

      <div id="programs" data-section="programs">
        <FeatureCardOne
          title="Training Programs"
          description="Comprehensive coaching options tailored to all skill levels"
          tag="Programs"
          tagIcon={Trophy}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          features={[
            {
              title: "Individual Coaching",
              description: "One-on-one sessions focused on personal skill development, technique refinement, and position-specific training.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788109302-mtvofvqe.jpg",
              imageAlt: "Individual coaching session"
            },
            {
              title: "Group Training",
              description: "Team-oriented workouts emphasizing coordination, communication, and competitive game situations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788109979-e0678qa0.jpg",
              imageAlt: "Group training session"
            },
            {
              title: "Specialty Programs",
              description: "Advanced training for specific positions, conditioning, mental toughness, and recruitment preparation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788110637-eqrnufno.jpg",
              imageAlt: "Specialty training program"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Athletes Say"
          description="Real results from dedicated players who transformed their game"
          tag="Success Stories"
          tagIcon={Award}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Quarterback",
              company: "College D1 Program",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788111333-9jz2r4zv.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Wide Receiver",
              company: "Pro League",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788111865-cvgz8q33.jpg",
              imageAlt: "Sarah Williams"
            },
            {
              id: "3",
              name: "David Martinez",
              role: "Linebacker",
              company: "College D1 Program",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788112376-v1rsj3xo.jpg",
              imageAlt: "David Martinez"
            },
            {
              id: "4",
              name: "James Chen",
              role: "Running Back",
              company: "Semi-Pro League",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788113084-37simquk.jpg",
              imageAlt: "James Chen"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Our Coaching Staff"
          description="Experienced professionals dedicated to your success"
          tag="Expert Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Coach Michael Stone",
              role: "Head Coach",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788113741-livroexd.jpg",
              imageAlt: "Coach Michael Stone",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            },
            {
              id: "2",
              name: "Coach Jennifer Lee",
              role: "Quarterback Coach",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788114427-a9mejvi4.jpg",
              imageAlt: "Coach Jennifer Lee",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "3",
              name: "Coach Robert Davis",
              role: "Strength & Conditioning",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788115263-v1ltdl6h.jpg",
              imageAlt: "Coach Robert Davis",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about our coaching services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788115926-psbk7gxr.jpg"
          imageAlt="Football coaching session"
          mediaPosition="right"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What age groups do you coach?",
              content: "We work with athletes from youth level (10+) through professional development. Each age group receives age-appropriate training and skill development."
            },
            {
              id: "2",
              title: "How long are coaching sessions?",
              content: "Standard sessions are 60 minutes for individual coaching and 90 minutes for group training. Custom session lengths can be arranged based on your needs."
            },
            {
              id: "3",
              title: "Do you offer online coaching?",
              content: "Yes, we offer virtual coaching sessions for film review, technique analysis, and mental conditioning work. In-person sessions are available for hands-on training."
            },
            {
              id: "4",
              title: "What is your coaching philosophy?",
              content: "We focus on fundamentals, work ethic, and mental toughness. We believe every athlete has potential and our job is to unlock it through personalized attention and proven methods."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Book Your Coaching Session"
          description="Ready to take your game to the next level? Contact us today to schedule your first session and start your journey to greatness."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764788108547-tjza8p3h.jpg"
          imageAlt="Football coaching session"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Schedule Session"
          termsText="We respect your privacy. We'll contact you within 24 hours to confirm your coaching session."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Elite Football Coaching"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Individual Coaching",
                  href: "#programs"
                },
                {
                  label: "Group Training",
                  href: "#programs"
                },
                {
                  label: "Specialty Programs",
                  href: "#programs"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Our Team",
                  href: "#team"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "FAQ",
                  href: "#faq"
                },
                {
                  label: "Testimonials",
                  href: "#testimonials"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            }
          ]}
          copyrightText="© Elite Football Coaching, 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}