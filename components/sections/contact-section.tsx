import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/contact-form";
import {
  Section,
  SectionCategoryText,
  SectionContent,
  SectionContentText,
  SectionTitle,
} from "../ui/section";

export default function ContactSection() {
  const contactItems = [
    {
      icon: <Mail size={24} className="text-blue-400" />,
      title: "Email",
      value: "abdu.ameen000@gmail.com",
    },
    {
      icon: <Phone size={24} className="text-blue-400" />,
      title: "Phone",
      value: "(661) 437-0598",
    },
    {
      icon: <MapPin size={24} className="text-blue-400" />,
      title: "Location",
      value: "Denver, CO",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} className="text-blue-400" />,
      href: "https://github.com/AbduAmeen",
    },
    {
      icon: <Linkedin size={24} className="text-blue-400" />,
      href: "https://www.linkedin.com/in/abduameen",
    },
  ];

  return (
    <Section className="bg-[#060c24] relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionCategoryText className="text-center">
          GET IN TOUCH
        </SectionCategoryText>
        <SectionTitle className="text-center">CONTACT ME</SectionTitle>

        <SectionContent className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <SectionContentText>
                I'm currently open to new opportunities and collaborations. Feel
                free to reach out if you'd like to discuss a project or
                potential role.
              </SectionContentText>
            </div>
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-blue-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center hover:bg-blue-800/40 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#0a1530] p-8 rounded-lg border border-blue-900/50">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
}
