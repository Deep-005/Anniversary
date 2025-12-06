from django.db import models
from django.utils import timezone

# Create your models here.
class GuestMessage(models.Model):
    RELATION_CHOICES = [
        ('mom', 'Mom'),
        ('dad', 'Dad'),
        ('mother_in_law', 'Mother-in-law'),
        ('father_in_law', 'Father-in-law'),
        ('son', 'Son'),
        ('daughter', 'Daughter'),
        ('friend', 'Friend'),
        ('sibling', 'Sibling'),
        ('grandparent', 'Grandparent'),
        ('other', 'Other'),
    ]
    
    SUB_RELATION_CHOICES = [
        ('bridal_side', 'Bridal Side'),
        ('groom_side', 'Groom Side'),
        ('both', 'Both'),
        ('none', 'None'),
    ]
    
    relation = models.CharField(max_length=20, choices=RELATION_CHOICES)
    sub_relation = models.CharField(max_length=20, choices=SUB_RELATION_CHOICES, default='none')
    message = models.TextField()
    display_order = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now)
    
    class Meta:
        ordering = ['display_order', 'created_at']
        verbose_name = 'Guest Message'
        verbose_name_plural = 'Guest Messages'
    
    def __str__(self):
        return f"{self.get_relation_display()} - {self.get_sub_relation_display()}"