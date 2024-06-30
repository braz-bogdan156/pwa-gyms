'use client'
import { useTranslations } from 'next-intl';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function Calendar() {
     const t = useTranslations('schedule');
     return(
        <Tabs defaultValue={t('calendar')}>
          
        </Tabs>
    ) 
  }