// @page CalendarPage
// @description Сторінка з календарем подій
// @createdBy Богдан Бражник
// @createdOn 2024-07-02

'use client'
import { useTranslations } from 'next-intl';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogBody, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from "@/components/ui/calendar";
import { Icons } from '@/components/icons';
import { Textarea } from '@/components/ui/textarea';

const CalendarPage = () => {
    const t = useTranslations('calendar');

    return (
        <Tabs defaultValue={t('tabs_overview')}>
            <TabsList className="px-10" color="indigo">
                <TabsTrigger value={t('tabs_overview')}>{t('tabs_overview')}</TabsTrigger>
                <TabsTrigger value={t('tabs_schedule')}>{t('tabs_schedule')}</TabsTrigger>
            </TabsList>

            {/* Огляд календаря */}
            <TabsContent className="px-10" value={t('tabs_overview')}>
                <div className="flex justify-between mt-8">
                    <Dialog>
                        <DialogTrigger>
                            <Button className="rounded-full" type='button'>
                                <Icons.add /> {t('add_event')}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="min-w-680 min-h-80">
                            <DialogHeader title={t('add_event')}></DialogHeader>
                            <DialogBody className=''>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Label htmlFor="event-title">{t('form_event_title')}</Label>
                                        <Input className="mt-2" id="event-title" type='text' />
                                    </div>
                                    <div>
                                        <Label htmlFor="event-date">{t('form_event_date')}</Label>
                                        <Input className="mt-2" id="event-date" type='date' />
                                    </div>
                                    <div>
                                        <Label htmlFor="event-time">{t('form_event_time')}</Label>
                                        <Input className="mt-2" id="event-time" type='time' />
                                    </div>
                                    <div>
                                        <Label htmlFor="event-description">{t('form_event_description')}</Label>
                                        <Textarea className="mt-2" id="event-description" />
                                    </div>
                                </div>
                            </DialogBody>
                            <DialogFooter>
                                <Button type="submit">{t('form_event_save')}</Button>
                                <Button type="button" variant='ghost'>{t('form_event_cancel')}</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <Calendar className="mt-8" />
            </TabsContent>

            {/* Розклад подій */}
            <TabsContent className="px-10" value={t('tabs_schedule')}>
                <div className="flex justify-between mt-8">
                    <Select>
                        <SelectTrigger className="w-[210px] rounded-full">
                            <SelectValue placeholder={t('select_view')} />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value={t('select_view_month')}>{t('select_view_month')}</SelectItem>
                            <SelectItem value={t('select_view_week')}>{t('select_view_week')}</SelectItem>
                            <SelectItem value={t('select_view_day')}>{t('select_view_day')}</SelectItem>
                        </SelectContent>
                    </Select>
                    <Dialog>
                        <DialogTrigger>
                            <Button className="rounded-full" type='button'>
                                <Icons.add /> {t('add_event')}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="min-w-680 min-h-80">
                            <DialogHeader title={t('add_event')}></DialogHeader>
                            <DialogBody className=''>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Label htmlFor="event-title">{t('form_event_title')}</Label>
                                        <Input className="mt-2" id="event-title" type='text' />
                                    </div>
                                    <div>
                                        <Label htmlFor="event-date">{t('form_event_date')}</Label>
                                        <Input className="mt-2" id="event-date" type='date' />
                                    </div>
                                    <div>
                                        <Label htmlFor="event-time">{t('form_event_time')}</Label>
                                        <Input className="mt-2" id="event-time" type='time' />
                                    </div>
                                    <div>
                                        <Label htmlFor="event-description">{t('form_event_description')}</Label>
                                        <Textarea className="mt-2" id="event-description" />
                                    </div>
                                </div>
                            </DialogBody>
                            <DialogFooter>
                                <Button type="submit">{t('form_event_save')}</Button>
                                <Button type="button" variant='ghost'>{t('form_event_cancel')}</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <Calendar className="mt-8" />
            </TabsContent>
        </Tabs>
    );
};

export default CalendarPage;