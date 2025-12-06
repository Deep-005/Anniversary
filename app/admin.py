from django.contrib import admin
from app.models import GuestMessage

# Register your models here.
@admin.register(GuestMessage)
class GuestMessageAdmin(admin.ModelAdmin):
    list_display = ['get_relation_display', 'get_sub_relation_display', 'display_order', 'created_at']
    list_filter = ['relation', 'sub_relation']
    list_editable = ['display_order']
    search_fields = ['message']
    
    fieldsets = (
        ('Message Details', {
            'fields': ('relation', 'sub_relation', 'message', 'display_order')
        }),
    )