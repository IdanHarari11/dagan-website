import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
export default function OurGraduatesPage() {
  return (
    <section className="py-20 pt-16 bg-gray-50 dark:bg-gray-900">
      <Partners />
      <Testimonials title="הבוגרים שלנו" />
    </section>
  );
} 